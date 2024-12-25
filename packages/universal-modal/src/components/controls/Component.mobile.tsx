import React, { ReactNode } from 'react';
import cn from 'classnames';

import layoutStyles from '../footer/desktop/layout.module.css';
import styles from './index.module.css';

export interface ControlsMobileProps {
    /**
     * Основной слот
     */
    primary?: ReactNode;

    /**
     * Дополнительный слот
     */
    secondary?: ReactNode;

    /**
     * Выравнивание элементов футера
     * @default start
     */
    layout?: 'start' | 'center' | 'space-between' | 'column';

    /**
     * Отступы между элементами футера
     */
    gap?: 16 | 24 | 32;

    /**
     * Идентификатор для систем автоматизированного тестирования
     */
    dataTestId?: string;
}

export const ControlsMobile: React.FC<ControlsMobileProps> = ({
    primary,
    secondary,
    gap,
    layout = 'start',
    dataTestId,
}) => {
    const shouldReverse = layout !== 'column';

    return (
        <div
            data-test-id={dataTestId}
            className={cn(
                styles.component,
                layoutStyles[layout],
                gap && layoutStyles[`gap-${gap}`],
            )}
        >
            {shouldReverse ? (
                <React.Fragment>
                    {secondary}
                    {primary}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {primary}
                    {secondary}
                </React.Fragment>
            )}
        </div>
    );
};
