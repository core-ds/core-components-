import { FC, ReactElement, ReactNode } from 'react';

import { TagProps } from '@alfalab/core-components-tag';

export type SelectedId = string | number;

export type TabsMatchMedia = 'desktop' | 'mobile';

export type TabsProps = {
    /**
     * Дополнительный класс
     */
    className?: string;

    /**
     * Дополнительный класс контейнера
     */
    containerClassName?: string;

    /**
     * Id активного таба
     */
    selectedId?: SelectedId;

    /**
     * Рендерить неактивные табы
     */
    keepMounted?: boolean;

    /**
     * Внешний вид заголовков табов
     */
    view?: 'primary' | 'secondary';

    /**
     * Высота заголовков табов
     */
    size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

    /**
     * Режим отображения по умолчанию
     */
    defaultMatch?: TabsMatchMedia;

    /**
     * Мобильный вид
     */
    mobile?: boolean;

    /**
     * Рендерить заголовки табов в контейнере со скроллом
     */
    scrollable?: boolean;

    /**
     * При скроле табы будут уходить в край экрана
     */
    fullWidthScroll?: boolean;

    /**
     * Компоненты табов
     */
    children: Array<ReactElement<TabProps>>;

    /**
     * Компонент заголовков табов
     */
    TabList: FC<TabListProps>;

    /**
     * Обработчик переключения табов
     */
    onChange?: (event: MouseEvent, payload: { selectedId: SelectedId }) => void;

    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};

export type TabProps = {
    /**
     * Id таба
     */
    id: SelectedId;

    /**
     * Заголовок таба
     */
    title: string;

    /**
     * Дополнительный класс для контейнера содержимого таба
     */
    className?: string;

    /**
     * Дополнительный класс для кнопки таба
     */
    toggleClassName?: string;

    /**
     * Блокирует таб
     */
    disabled?: boolean;

    /**
     * Управление видимостью таба
     */
    hidden?: boolean;

    /**
     * Рендерить таб, если он неактивен
     */
    keepMounted?: boolean;

    /**
     * Контент таба
     */
    children?: ReactNode;

    /**
     * Слот справа
     */
    rightAddons?: ReactNode;

    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
};

export type TabListProps = Pick<
    TabsProps,
    | 'className'
    | 'containerClassName'
    | 'size'
    | 'defaultMatch'
    | 'selectedId'
    | 'scrollable'
    | 'onChange'
    | 'dataTestId'
    | 'fullWidthScroll'
> & {
    /**
     * Заголовки табов
     */
    titles?: Array<{
        title: string;
        id: SelectedId;
        disabled?: boolean;
        rightAddons?: ReactNode;
        hidden?: boolean;
        toggleClassName?: string;
    }>;
};

export type SecondaryTabListProps = TabListProps & {
    tagSize?: TagProps['size'];
};

export type UseTabsProps = TabListProps;

export type Styles = {
    styles: { [key: string]: string };
};
