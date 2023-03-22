import React, { forwardRef, RefAttributes, useCallback, useEffect, useMemo, useRef } from 'react';

import { Button } from '@alfalab/core-components-button';

import { OptionsList as DefaultOptionsList } from '../../../components';
import { OptionShape, OptionsListProps } from '../../../typings';
import { SELECT_ALL_KEY } from '../hook';

import styles from './index.module.css';

type OptionsListWithApplyProps = OptionsListProps & {
    showClear?: boolean;
    onClose?: () => void;
    selectedDraft?: OptionShape[];
    OptionsList?: React.FC<OptionsListProps & RefAttributes<unknown>>;
    view?: string;
};

export const OptionsListWithApply = forwardRef(
    (
        {
            toggleMenu,
            OptionsList = DefaultOptionsList,
            getOptionProps: defaultGetOptionProps,
            showClear = true,
            selectedDraft = [],
            flatOptions = [],
            onApply = () => null,
            onClear = () => null,
            onClose = () => null,
            visibleOptions = 5,
            view,
            ...restProps
        }: OptionsListWithApplyProps,
        ref,
    ) => {
        const footerRef = useRef<HTMLDivElement>(null);

        const buttonView = useMemo(() => (view === 'mobile' ? 's' : 'xxs'), [view]);

        const getOptionProps = useCallback(
            (option: OptionShape, index: number) => {
                const optionProps = defaultGetOptionProps(option, index);

                const selected =
                    option.key === SELECT_ALL_KEY
                        ? selectedDraft.length === flatOptions.length - 1
                        : selectedDraft.includes(option);

                return {
                    ...optionProps,
                    selected,
                };
            },
            [defaultGetOptionProps, flatOptions.length, selectedDraft],
        );

        const handleApply = useCallback(() => {
            onApply();

            toggleMenu();
        }, [onApply, toggleMenu]);

        const handleClear = useCallback(() => {
            onClear();

            toggleMenu();
        }, [onClear, toggleMenu]);

        useEffect(() => {
            const activeElement = document.activeElement as HTMLElement;

            setTimeout(() => {
                if (footerRef.current) {
                    footerRef.current.focus();
                }
            }, 0);

            return () => {
                onClose();
                if (activeElement) {
                    activeElement.focus();
                }
            };
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return (
            <OptionsList
                {...restProps}
                ref={ref}
                visibleOptions={visibleOptions}
                toggleMenu={toggleMenu}
                flatOptions={flatOptions}
                getOptionProps={getOptionProps}
                onApply={handleApply}
                onClear={handleClear}
                footer={
                    <div
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                        tabIndex={0}
                        className={view === 'mobile' ? styles.footerMobile : styles.footer}
                        ref={footerRef}
                    >
                        <Button
                            size={buttonView}
                            view='primary'
                            onClick={handleApply}
                            className={view === 'mobile' ? styles.footerButton : undefined}
                        >
                            Применить
                        </Button>

                        {showClear && (
                            <Button
                                size={buttonView}
                                view='secondary'
                                onClick={handleClear}
                                className={view === 'mobile' ? styles.footerButton : undefined}
                            >
                                Сбросить
                            </Button>
                        )}
                    </div>
                }
            />
        );
    },
);
