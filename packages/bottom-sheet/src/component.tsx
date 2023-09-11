import React, {
    CSSProperties,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import { use100vh } from 'react-div-100vh';
import mergeRefs from 'react-merge-refs';
import { SwipeCallback, TapCallback, useSwipeable } from 'react-swipeable';
import { HandledEvents } from 'react-swipeable/es/types';
import cn from 'classnames';

import { BaseModal } from '@alfalab/core-components-base-modal';
import { fnUtils, getDataTestId } from '@alfalab/core-components-shared';

import { Footer } from './components/footer/Component';
import { Header, HeaderProps } from './components/header/Component';
import { SwipeableBackdrop } from './components/swipeable-backdrop/Component';
import type { BottomSheetProps } from './types';
import {
    CLOSE_OFFSET,
    convertPercentToNumber,
    MARKER_HEIGHT,
    SCROLL_OFFSET,
    SWIPE_VELOCITY,
    TIMEOUT,
} from './utils';

import styles from './index.module.css';

const { isNil } = fnUtils;

export const BottomSheet = forwardRef<HTMLDivElement, BottomSheetProps>(
    (
        {
            open,
            title,
            container,
            usePortal,
            backgroundColor,
            titleSize = 'default',
            subtitle,
            actionButton,
            contentClassName,
            containerClassName,
            containerProps,
            headerClassName,
            footerClassName,
            addonClassName,
            closerClassName,
            backerClassName,
            modalClassName,
            modalWrapperClassName,
            className,
            leftAddons,
            rightAddons,
            bottomAddons,
            hasCloser,
            hasBacker,
            titleAlign = 'left',
            trimTitle,
            stickyHeader,
            stickyFooter = true,
            initialHeight = 'default',
            hideOverlay,
            hideScrollbar,
            hideHeader,
            disableOverlayClick,
            disableBlockingScroll,
            disableFocusLock,
            children,
            zIndex,
            transitionProps = {},
            magneticAreas: magneticAreasProp,
            initialActiveAreaIndex,
            dataTestId,
            swipeable = true,
            swipeableContent = true,
            swipeThreshold = 5,
            scrollLocked: scrollLockedProp,
            backdropProps,
            scrollableContainerRef = () => null,
            bottomSheetInstanceRef,
            sheetContainerRef = () => null,
            headerOffset = 24,
            onClose,
            onBack,
            onMagnetize,
            onSwipeStart,
            onSwipeEnd,
            disableRestoreFocus,
            disableAutoFocus,
            disableEscapeKeyDown,
            keepMounted,
            onMagnetizeEnd,
            onOffsetChange,
            swipeableMarker,
            swipeableMarkerClassName,
        },
        ref,
    ) => {
        const fullHeight = use100vh() || 0;
        // Хук use100vh рассчитывает высоту вьюпорта в useEffect, поэтому на первый рендер всегда возвращает null.
        const isFirstRender = fullHeight === 0;

        const magneticAreas = useMemo(() => {
            if (magneticAreasProp) {
                return magneticAreasProp.map((area) =>
                    convertPercentToNumber(area, fullHeight, headerOffset),
                );
            }

            return [0, fullHeight - headerOffset];
        }, [fullHeight, headerOffset, magneticAreasProp]);

        const lastMagneticArea = magneticAreas[magneticAreas.length - 1];

        const [sheetOffset, setSheetOffset] = useState(0);
        const [backdropOpacity, setBackdropOpacity] = useState(1);
        const [activeArea, setActiveArea] = useState(0);

        const [swipingInProgress, setSwipingInProgress] = useState<boolean | null>(null);
        const scrollOccurred = useRef<boolean>(false);
        const headerRef = useRef<HTMLDivElement>(null);
        const contentRef = useRef<HTMLDivElement>(null);
        const sheetHeight = useRef(0);
        const sheetRef = useRef<HTMLDivElement>(null);
        const scrollableContainer = useRef<HTMLDivElement | null>(null);

        const emptyHeader = !hasCloser && !leftAddons && !title && !hasBacker && !rightAddons;

        const titleIsReactElement = React.isValidElement(title);

        const headerProps: HeaderProps = {
            ...(titleIsReactElement
                ? { children: title }
                : { title: title ? title?.toString() : undefined }),
            scrollableParentRef: scrollableContainer,
            headerRef,
            headerOffset,
            className: headerClassName,
            addonClassName,
            closerClassName,
            backButtonClassName: backerClassName,
            leftAddons,
            rightAddons,
            bottomAddons,
            hasCloser,
            hasBackButton: hasBacker,
            align: titleAlign,
            trim: trimTitle,
            sticky: stickyHeader,
            dataTestId: getDataTestId(dataTestId, 'header'),
            onBack,
            titleSize,
            subtitle,
            onClose,
        };

        const startSwiping = (event: HandledEvents) => {
            setSwipingInProgress((p) => {
                if (!p) onSwipeStart?.(event);

                return true;
            });
        };

        const stopSwiping = (event: HandledEvents | null) => {
            setSwipingInProgress((p) => {
                if (p) onSwipeEnd?.(event);

                return false;
            });
            scrollOccurred.current = false;
        };

        const getBackdropOpacity = (offset: number): number => {
            const canClose = magneticAreas[0] === 0;
            const secondArea = magneticAreas[1];
            const isSecondArea = secondArea === activeArea;

            if (canClose && isSecondArea && sheetOffset > lastMagneticArea - secondArea) {
                const opacity = 1 - (offset - (lastMagneticArea - secondArea)) / secondArea;

                return Math.max(0, Number(opacity.toFixed(2)));
            }

            return 1;
        };

        const getSheetOffset = (deltaY: number): number => {
            let offset = lastMagneticArea - activeArea + deltaY;
            const maxOffset = magneticAreas[0] === 0 ? 0 : lastMagneticArea - magneticAreas[0];

            if (maxOffset) {
                offset = Math.min(maxOffset, offset);
            }

            return Math.max(0, Math.round(offset));
        };

        const getActiveAreaIndex = (area: number) => magneticAreas.findIndex((a) => a === area);

        const setSheetHeight = () => {
            if (sheetRef.current) {
                sheetHeight.current = sheetRef.current.getBoundingClientRect().height - sheetOffset;
            }
        };

        const handleTransitionEnd = (event: React.TransitionEvent) => {
            setSheetHeight();

            if (event.propertyName === 'transform' && event.target === event.currentTarget) {
                onMagnetizeEnd?.();
            }
        };

        const scrollToArea = (idx: number) => {
            stopSwiping(null);
            const nextArea = magneticAreas[idx];

            if (nextArea === 0) {
                onClose();

                return;
            }

            if (nextArea) {
                setActiveArea(nextArea);
                setSheetOffset(lastMagneticArea - nextArea);
                onMagnetize?.(getActiveAreaIndex(nextArea));
            }
        };

        const magnetize = (velocity: number, deltaY: number) => {
            const shouldMagnetizeDownByVelocity = deltaY >= 0 && velocity >= SWIPE_VELOCITY;
            const shouldMagnetizeUpByVelocity = deltaY < 0 && velocity >= SWIPE_VELOCITY;

            if (shouldMagnetizeDownByVelocity) {
                const nextArea = magneticAreas
                    .slice()
                    .reverse()
                    .find((area) => area < activeArea);

                if (nextArea === 0) {
                    onClose();

                    return;
                }

                const offset = nextArea
                    ? lastMagneticArea - nextArea
                    : lastMagneticArea - activeArea;

                setSheetOffset(offset);
                setActiveArea((prevState) => nextArea ?? prevState);

                if (nextArea) {
                    onMagnetize?.(getActiveAreaIndex(nextArea));
                }

                return;
            }

            if (shouldMagnetizeUpByVelocity) {
                const nextArea = magneticAreas.find((area) => area > activeArea);

                const offset = nextArea ? lastMagneticArea - nextArea : 0;

                setSheetOffset(offset);
                setActiveArea((prevState) => nextArea ?? prevState);

                if (nextArea) {
                    onMagnetize?.(getActiveAreaIndex(nextArea));
                }

                return;
            }

            const offset = getSheetOffset(deltaY);
            const currentSheetHeight = lastMagneticArea - offset;
            const secondArea = magneticAreas[1];
            const isSecondArea = activeArea === secondArea;
            const canClose = magneticAreas[0] === 0 && deltaY >= 0;
            const shouldCloseByOffset =
                isSecondArea && canClose && 1 - currentSheetHeight / activeArea > CLOSE_OFFSET;

            if (shouldCloseByOffset) {
                onClose();

                return;
            }

            const { nearestArea } = magneticAreas.reduceRight(
                (res, area) => {
                    if (Math.abs(area - currentSheetHeight) < res.minOffset) {
                        res.minOffset = area - currentSheetHeight;
                        res.nearestArea = area;
                    }

                    return res;
                },
                {
                    nearestArea: lastMagneticArea,
                    minOffset: lastMagneticArea,
                },
            );

            if (nearestArea === 0) {
                onClose();
            } else {
                setSheetOffset(lastMagneticArea - nearestArea);
                setActiveArea(nearestArea);
                setBackdropOpacity(1);
                onMagnetize?.(getActiveAreaIndex(nearestArea));
            }
        };

        /**
         * Если контент внутри шторки скроллится - то шторка не должна свайпаться
         * Если шапка внутри шторки зафиксирована - то шторка должна свайпаться только в области шапки
         */
        const shouldSkipSwiping = (deltaY: number, startY: number, event: HandledEvents) => {
            if (!swipeable) return true;

            if (!swipeableContent && contentRef.current?.contains(event.target as HTMLElement)) {
                return true;
            }

            if (scrollLockedProp || swipingInProgress) return false;

            const scrollableNode = scrollableContainer.current;
            // Точка верхней границы (y координата)
            const bottomSheetTopY = fullHeight - sheetHeight.current;

            if (
                !scrollableNode ||
                (!stickyHeader && Math.abs(bottomSheetTopY - startY) <= MARKER_HEIGHT) ||
                (stickyHeader &&
                    headerRef.current &&
                    Math.abs(bottomSheetTopY - startY) <= headerRef.current.clientHeight)
            ) {
                return false;
            }

            const shouldScroll =
                deltaY >= 0
                    ? scrollableNode.scrollTop > 0
                    : scrollableNode.scrollHeight -
                          scrollableNode.scrollTop -
                          scrollableNode.clientHeight >
                      SCROLL_OFFSET;

            if (!scrollOccurred.current && shouldScroll) {
                scrollOccurred.current = true;
            }

            return shouldScroll;
        };

        const handleSheetSwipe: SwipeCallback = ({ initial, velocity, deltaY, event }) => {
            if (scrollOccurred.current || shouldSkipSwiping(deltaY, initial[1], event)) {
                return;
            }

            magnetize(velocity, deltaY);
        };

        const handleSheetSwipeStart: SwipeCallback = ({ deltaY, initial, event }) => {
            if (shouldSkipSwiping(deltaY, initial[1], event)) {
                return;
            }

            startSwiping(event);
        };

        const handleTouchEnd: TapCallback = ({ event }) => stopSwiping(event);

        const handleSheetSwiping: SwipeCallback = ({ initial, deltaY, event }) => {
            if (scrollOccurred.current || shouldSkipSwiping(deltaY, initial[1], event)) {
                return;
            }

            if (!swipingInProgress) {
                startSwiping(event);
            }

            const offset = getSheetOffset(deltaY);
            const opacity = getBackdropOpacity(offset);

            setSheetOffset(offset);
            setBackdropOpacity(opacity);
        };

        const sheetSwipeableHandlers = useSwipeable({
            onSwipeStart: handleSheetSwipeStart,
            onSwiping: handleSheetSwiping,
            onSwiped: handleSheetSwipe,
            onTouchEndOrOnMouseUp: handleTouchEnd,
            trackMouse: swipeable,
            delta: swipeThreshold,
        });

        const handleExited = (node: HTMLElement) => {
            const idx = initialActiveAreaIndex as number;
            const nextArea = isNil(idx) ? lastMagneticArea : magneticAreas[idx];

            setBackdropOpacity(1);
            setSheetOffset(isNil(idx) ? magneticAreas[0] : lastMagneticArea - magneticAreas[idx]);
            setActiveArea(nextArea);
            onMagnetizeEnd?.();
            if (transitionProps.onExited) {
                transitionProps.onExited(node);
            }
        };

        const handleEnter = (node: HTMLElement, isAppearing: boolean) => {
            onMagnetize?.(initialActiveAreaIndex || magneticAreas.length - 1);

            if (transitionProps.onEnter) {
                transitionProps.onEnter(node, isAppearing);
            }
        };

        const handleExit = (node: HTMLElement) => {
            onMagnetize?.(0);

            if (transitionProps.onExit) {
                transitionProps.onExit(node);
            }
        };

        const handleEntered = (node: HTMLElement, isAppearing: boolean) => {
            setBackdropOpacity(1);
            setSheetHeight();
            // Ready for swiping
            setSwipingInProgress(false);
            onMagnetizeEnd?.();

            if (transitionProps.onEntered) {
                transitionProps.onEntered(node, isAppearing);
            }
        };

        useEffect(() => {
            // Инициализируем стейт только после того, как была рассчитана высота вьюпорта
            if (!isFirstRender) {
                const idx = initialActiveAreaIndex as number;

                setSheetOffset(isNil(idx) ? 0 : lastMagneticArea - magneticAreas[idx]);
                setActiveArea(isNil(idx) ? lastMagneticArea : magneticAreas[idx]);
            }
        }, [initialActiveAreaIndex, isFirstRender, lastMagneticArea, magneticAreas]);

        useEffect(() => {
            if (!sheetRef.current) return;

            const maxOffset = fullHeight - headerOffset;

            const offset = open ? sheetOffset : maxOffset;

            const percent = (offset / maxOffset) * 100;

            onOffsetChange?.(offset, percent);
        }, [fullHeight, headerOffset, onOffsetChange, open, sheetOffset]);

        useImperativeHandle(bottomSheetInstanceRef, () => ({
            scrollToArea,
        }));

        const getSwipeStyles = (): CSSProperties =>
            sheetOffset ? { transform: `translateY(${sheetOffset}px)` } : {};

        const getHeightStyles = (): CSSProperties => ({
            height: !isFirstRender && initialHeight === 'full' ? `${lastMagneticArea}px` : 'unset',
            maxHeight: isFirstRender ? 0 : `${lastMagneticArea}px`,
        });

        const renderMarker = () => {
            if (swipeable) {
                if (swipeableMarker) {
                    return (
                        <div className={cn(styles.marker, swipeableMarkerClassName)}>
                            {swipeableMarker}
                        </div>
                    );
                }

                return (
                    <div
                        className={cn(
                            styles.marker,
                            styles.defaultMarker,
                            swipeableMarkerClassName,
                        )}
                    />
                );
            }

            return null;
        };

        const bgClassName = backgroundColor && styles[`background-${backgroundColor}`];

        return (
            <BaseModal
                open={open}
                ref={ref}
                container={container}
                dataTestId={dataTestId}
                zIndex={zIndex}
                onClose={onClose}
                usePortal={usePortal}
                scrollHandler={scrollableContainer}
                Backdrop={SwipeableBackdrop}
                backdropProps={{
                    ...backdropProps,
                    className: styles.disabledPointerEvents,
                    opacity: backdropOpacity,
                    opacityTimeout: TIMEOUT,
                    invisible: hideOverlay,
                }}
                disableBackdropClick={hideOverlay ? true : disableOverlayClick}
                className={cn(styles.modal, modalClassName)}
                wrapperClassName={cn(modalWrapperClassName, {
                    [styles.disabledPointerEvents]: hideOverlay,
                })}
                disableBlockingScroll={disableBlockingScroll}
                disableFocusLock={disableFocusLock}
                transitionProps={{
                    appear: true,
                    timeout: TIMEOUT,
                    classNames: styles,
                    ...transitionProps,
                    onExited: handleExited,
                    onEntered: handleEntered,
                    onEnter: handleEnter,
                    onExit: handleExit,
                }}
                disableAutoFocus={disableAutoFocus}
                disableEscapeKeyDown={disableEscapeKeyDown}
                disableRestoreFocus={disableRestoreFocus}
                keepMounted={keepMounted}
            >
                <div
                    style={{ ...getHeightStyles() }}
                    className={cn(styles.wrapper, {
                        [styles.fullscreen]: headerOffset === 0 && sheetOffset === 0,
                    })}
                    onTransitionEnd={setSheetHeight}
                >
                    <div
                        className={cn(styles.component, bgClassName, className, {
                            [styles.withTransition]: swipingInProgress === false,
                        })}
                        style={{
                            ...getSwipeStyles(),
                            ...getHeightStyles(),
                        }}
                        {...sheetSwipeableHandlers}
                        ref={mergeRefs([sheetRef, sheetContainerRef, sheetSwipeableHandlers.ref])}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {renderMarker()}
                        <div
                            {...containerProps}
                            className={cn(
                                styles.scrollableContainer,
                                containerProps?.className,
                                containerClassName,
                                {
                                    [styles.scrollLocked]: scrollLockedProp || swipingInProgress,
                                    [styles.hiddenScrollbar]: hideScrollbar,
                                },
                            )}
                            ref={mergeRefs([scrollableContainer, scrollableContainerRef])}
                        >
                            {!hideHeader && !emptyHeader && <Header {...headerProps} />}

                            <div
                                ref={contentRef}
                                className={cn(styles.content, contentClassName, {
                                    [styles.noHeader]: hideHeader || emptyHeader,
                                    [styles.noFooter]: !actionButton,
                                })}
                            >
                                {children}
                            </div>

                            {actionButton && (
                                <Footer
                                    sticky={stickyFooter}
                                    className={cn(bgClassName, footerClassName)}
                                >
                                    {actionButton}
                                </Footer>
                            )}
                        </div>
                    </div>
                </div>
            </BaseModal>
        );
    },
);
