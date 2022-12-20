import React, {
    FocusEvent,
    forwardRef,
    KeyboardEvent,
    MouseEvent,
    ReactNode,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import mergeRefs from 'react-merge-refs';
import cn from 'classnames';
import {
    useCombobox,
    useMultipleSelection,
    UseMultipleSelectionProps,
    UseMultipleSelectionState,
} from 'downshift';

import { BottomSheet, BottomSheetProps } from '@alfalab/core-components-bottom-sheet';
import { ModalMobile } from '@alfalab/core-components-modal/mobile';
import { BaseOption } from '@alfalab/core-components-select';

import { getDataTestId } from '../../../../utils/getDataTestId';
import { OptionsListWithApply } from '../../presets/useSelectWithApply/options-list-with-apply';
import { BaseSelectProps, OptionProps, OptionShape } from '../../typings';
import { processOptions } from '../../utils';
import { Arrow as DefaultArrow } from '../arrow';
import { BaseCheckmark } from '../base-checkmark';
import { Field as DefaultField } from '../field';
import { Optgroup as DefaultOptgroup } from '../optgroup';
import { Option as DefaultOption } from '../option';

import { Checkmark } from './checkmark';
import { OptionsList as DefaultOptionsList } from './options-list';

import styles from './index.module.css';

export type SelectMobileProps = Omit<BaseSelectProps, 'Checkmark' | 'onScroll'> & {
    /**
     * Футер
     * @deprecated Используйте bottomSheetProps.actionButton
     */
    footer?: ReactNode;

    /**
     * Будет ли свайпаться шторка
     * @deprecated Используйте bottomSheetProps.swipeable
     */
    swipeable?: boolean;

    /**
     * Отображать в BottomSheet
     */
    isBottomSheet?: boolean;

    /**
     * Дополнительные пропсы шторки
     */
    bottomSheetProps?: Partial<BottomSheetProps>;
};

export const BaseSelectMobile = forwardRef(
    (
        {
            dataTestId,
            className,
            fieldClassName,
            optionsListClassName,
            optionClassName,
            optionGroupClassName,
            optionsListProps,
            options,
            autocomplete = false,
            multiple = false,
            allowUnselect = false,
            disabled = false,
            closeOnSelect = !multiple,
            circularNavigation = false,
            defaultOpen = false,
            open: openProp,
            name,
            id,
            selected,
            size = 'm',
            optionsSize = 'm',
            error,
            hint,
            block,
            label,
            labelView,
            placeholder,
            fieldProps = {},
            optionProps = {},
            valueRenderer,
            onChange,
            onOpen,
            onFocus,
            Arrow = DefaultArrow,
            Field = DefaultField,
            Optgroup = DefaultOptgroup,
            Option = DefaultOption,
            OptionsList = DefaultOptionsList,
            swipeable,
            footer,
            isBottomSheet,
            bottomSheetProps,
        }: SelectMobileProps,
        ref,
    ) => {
        const rootRef = useRef<HTMLLabelElement>(null);
        const fieldRef = useRef<HTMLInputElement>(null);
        const listRef = useRef<HTMLDivElement>(null);
        const initiatorRef = useRef<OptionShape | null>(null);

        const itemToString = (option: OptionShape) => (option ? option.key : '');

        const { flatOptions, selectedOptions } = useMemo(
            () => processOptions(options, selected),
            [options, selected],
        );

        const selectedOptionsRef = useRef<OptionShape[]>(selectedOptions);

        const [selectedDraft, setSelectedDraft] = useState<OptionShape[]>(selectedOptions);

        const useMultipleSelectionProps: UseMultipleSelectionProps<OptionShape> = {
            itemToString,
            onSelectedItemsChange: (changes) => {
                if (onChange) {
                    const { selectedItems = [] } = changes;

                    onChange({
                        selectedMultiple: selectedItems,
                        selected: selectedItems.length ? selectedItems[0] : null,
                        initiator: initiatorRef.current,
                        name,
                    });

                    initiatorRef.current = null;
                }
            },
            stateReducer: (state, actionAndChanges) => {
                const { type, changes } = actionAndChanges;

                if (
                    !allowUnselect &&
                    type === useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace
                ) {
                    return state;
                }

                return changes as UseMultipleSelectionState<OptionShape>;
            },
        };

        if (selected !== undefined) {
            useMultipleSelectionProps.selectedItems = selectedOptions;
        }

        const {
            selectedItems,
            addSelectedItem,
            setSelectedItems,
            removeSelectedItem,
            getDropdownProps,
        } = useMultipleSelection(useMultipleSelectionProps);

        const {
            isOpen: open,
            getMenuProps,
            getInputProps,
            getItemProps,
            getComboboxProps,
            getLabelProps,
            highlightedIndex,
            toggleMenu,
            openMenu,
        } = useCombobox<OptionShape>({
            id,
            isOpen: openProp,
            circularNavigation,
            items: flatOptions,
            itemToString,
            defaultHighlightedIndex: -1,
            onIsOpenChange: (changes) => {
                if (onOpen) {
                    /**
                     *  Вызываем обработчик асинхронно.
                     *
                     * Иначе при клике вне открытого селекта сначала сработает onOpen, который закроет селект,
                     * А затем сработает onClick кнопки открытия\закрытия с open=false и в итоге селект откроется снова.
                     */
                    setTimeout(() => {
                        onOpen({
                            open: changes.isOpen,
                            name,
                        });
                    }, 0);
                }
            },
            stateReducer: (state, actionAndChanges) => {
                const { type, changes } = actionAndChanges;
                const { selectedItem } = changes;

                switch (type) {
                    case useCombobox.stateChangeTypes.InputBlur:
                        return state;
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        initiatorRef.current = selectedItem;

                        if (selectedItem && !selectedItem.disabled) {
                            const alreadySelected = selectedItems.includes(selectedItem);
                            const allowRemove =
                                allowUnselect || (multiple && selectedItems.length > 1);

                            if (alreadySelected && allowRemove) {
                                if (multiple) {
                                    removeSelectedItem(selectedItem);
                                } else {
                                    setSelectedItems([]);
                                    setSelectedDraft([]);
                                }
                            }

                            if (!alreadySelected) {
                                if (multiple) {
                                    addSelectedItem(selectedItem);
                                } else {
                                    setSelectedItems([selectedItem]);
                                    setSelectedDraft([selectedItem]);
                                }
                            }
                        }

                        return {
                            ...changes,
                            isOpen: !closeOnSelect || multiple,
                            // при closeOnSelect === false - сохраняем подсвеченный индекс
                            highlightedIndex:
                                state.isOpen && !closeOnSelect
                                    ? state.highlightedIndex
                                    : changes.highlightedIndex,
                        };
                    default:
                        return changes;
                }
            },
        });

        const menuProps = (getMenuProps as (options: object, additional: object) => Record<string, any>)(
            { ref: listRef },
            { suppressRefError: true },
        );
        const inputProps = getInputProps(getDropdownProps({ ref: mergeRefs([ref, fieldRef]) }));

        useEffect(() => {
            setSelectedDraft(selectedOptions);
            setSelectedItems(selectedOptions);
            selectedOptionsRef.current = selectedOptions;
        }, [setSelectedItems, selectedOptions]);

        const handleFieldFocus = (event: FocusEvent<HTMLDivElement | HTMLInputElement>) => {
            if (onFocus) onFocus(event);

            if (autocomplete && !open) {
                openMenu();
            }
        };

        const handleFieldKeyDown = (event: KeyboardEvent<HTMLDivElement | HTMLInputElement>) => {
            inputProps.onKeyDown(event);
            if (autocomplete && !open && (event.key.length === 1 || event.key === 'Backspace')) {
                // Для автокомплита - открываем меню при начале ввода
                openMenu();
            }

            if (
                [' ', 'Enter'].includes(event.key) &&
                !autocomplete &&
                (event.target as HTMLElement).tagName !== 'INPUT' &&
                (event.target as HTMLElement).tagName !== 'BUTTON'
            ) {
                // Открываем\закрываем меню по нажатию enter или пробела
                event.preventDefault();
                if (!open || highlightedIndex === -1) toggleMenu();
            }
        };

        const handleFieldClick = (event: MouseEvent) => {
            if (!autocomplete || (event.target as HTMLElement).tagName !== 'INPUT') {
                toggleMenu();
            } else {
                openMenu();
            }
        };

        const getOptionProps = (option: OptionShape, index: number): OptionProps => {
            const selectedItem = selectedItems.includes(option);

            return {
                ...(optionProps as object),
                mobile: true,
                className: cn(styles.option, optionClassName),
                innerProps: getItemProps({
                    index,
                    item: option,
                    disabled: option.disabled,
                    onMouseDown: (event: MouseEvent) => event.preventDefault(),
                }),
                multiple,
                index,
                option,
                size: optionsSize,
                disabled: option.disabled,
                highlighted: index === highlightedIndex,
                selected: selectedItem,
                dataTestId: getDataTestId(dataTestId, 'option'),
                // eslint-disable-next-line react/no-unstable-nested-components
                Checkmark: () =>
                    Option === BaseOption ? (
                        <BaseCheckmark selected={selectedItem} multiple={multiple} />
                    ) : (
                        <Checkmark selected={selectedItem} />
                    ),
            };
        };

        useEffect(() => {
            if (defaultOpen) openMenu();
        }, [defaultOpen, openMenu]);

        useEffect(() => {
            if (openProp) {
                openMenu();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        const renderValue = () =>
            selectedItems.map((option) => (
                <input type='hidden' name={name} value={option.key} key={option.key} />
            ));

        const handleApply = () => {
            setSelectedDraft(selectedItems);
        };

        const handleClear = () => {
            setSelectedDraft([]);
            setSelectedItems([]);
        };

        const handleClose = () => {
            if (multiple) {
                setSelectedItems(selectedDraft);
            }

            toggleMenu();
        };

        return (
            <div
                {...getComboboxProps({
                    ref: rootRef,
                    ...(disabled && { 'aria-disabled': true }),
                    className: cn(styles.component, { [styles.block]: block }, className),
                })}
                onKeyDown={disabled ? undefined : handleFieldKeyDown}
                tabIndex={-1}
                data-test-id={getDataTestId(dataTestId)}
            >
                <Field
                    selectedMultiple={selectedDraft}
                    selected={selectedItems[0]}
                    setSelectedItems={setSelectedItems}
                    toggleMenu={toggleMenu}
                    multiple={multiple}
                    open={open}
                    disabled={disabled}
                    size={size}
                    placeholder={placeholder}
                    label={label && <span {...getLabelProps()}>{label}</span>}
                    labelView={labelView}
                    Arrow={Arrow && <Arrow open={open} />}
                    error={error}
                    hint={hint}
                    valueRenderer={valueRenderer}
                    className={fieldClassName}
                    innerProps={{
                        onFocus: disabled ? undefined : handleFieldFocus,
                        onClick: disabled ? undefined : handleFieldClick,
                        tabIndex: disabled ? -1 : 0,
                        ref: mergeRefs([inputProps.ref]),
                        id: inputProps.id,
                        'aria-labelledby': inputProps['aria-labelledby'],
                        'aria-controls': inputProps['aria-controls'],
                        'aria-autocomplete': autocomplete
                            ? inputProps['aria-autocomplete']
                            : undefined,
                    }}
                    dataTestId={getDataTestId(dataTestId, 'field')}
                    {...fieldProps as Record<string, any>}
                />

                {name && renderValue()}

                {isBottomSheet ? (
                    <BottomSheet
                        open={open}
                        onClose={handleClose}
                        className={styles.sheet}
                        contentClassName={styles.sheetContent}
                        containerClassName={styles.sheetContainer}
                        title={placeholder}
                        actionButton={footer}
                        stickyHeader={true}
                        hasCloser={true}
                        swipeable={swipeable}
                        {...bottomSheetProps}
                    >
                        <div {...menuProps} className={optionsListClassName}>
                            <OptionsListWithApply
                                showFooter={multiple}
                                {...optionsListProps as Record<string, any>}
                                flatOptions={flatOptions}
                                highlightedIndex={highlightedIndex}
                                size={size}
                                options={options}
                                OptionsList={OptionsList}
                                Optgroup={Optgroup}
                                Option={Option}
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
                                toggleMenu={toggleMenu}
                                getOptionProps={getOptionProps}
                                dataTestId={getDataTestId(dataTestId, 'options-list')}
                                optionGroupClassName={cn(styles.optionGroup, optionGroupClassName)}
                                onApply={handleApply}
                                onClear={handleClear}
                            />
                        </div>
                    </BottomSheet>
                ) : (
                    <ModalMobile
                        open={open}
                        onClose={handleClose}
                        contentClassName={styles.sheetContent}
                        hasCloser={true}
                    >
                        <ModalMobile.Header hasCloser={true} title={placeholder} sticky={true} />
                        <div {...menuProps} className={optionsListClassName}>
                            <OptionsListWithApply
                                showFooter={multiple}
                                {...optionsListProps as Record<string, any>}
                                flatOptions={flatOptions}
                                highlightedIndex={highlightedIndex}
                                size={size}
                                options={options}
                                OptionsList={OptionsList}
                                Optgroup={Optgroup}
                                Option={Option}
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
                                toggleMenu={toggleMenu}
                                getOptionProps={getOptionProps}
                                dataTestId={getDataTestId(dataTestId, 'options-list')}
                                optionGroupClassName={cn(styles.optionGroup, optionGroupClassName)}
                                onApply={handleApply}
                                onClear={handleClear}
                            />
                        </div>
                    </ModalMobile>
                )}
            </div>
        );
    },
);
