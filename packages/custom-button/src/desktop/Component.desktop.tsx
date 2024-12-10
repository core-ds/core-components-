import React, { forwardRef } from 'react';
import cn from 'classnames';

import { ButtonDesktop } from '@alfalab/core-components-button/desktop';

import { DEFAULT_BUTTON_COLOR, DEFAULT_CONTENT_COLOR } from '../constants/default-colors';
import { CustomButtonProps } from '../types/props';

import styles from '../index.module.css';

export const CustomButtonDesktop = forwardRef<
    HTMLAnchorElement | HTMLButtonElement,
    CustomButtonProps
>(
    (
        {
            children,
            className,
            loading,
            backgroundColor = DEFAULT_BUTTON_COLOR,
            contentColor = DEFAULT_CONTENT_COLOR,
            stateType = 'darkening',
            ...restProps
        },
        ref,
    ) => (
        <ButtonDesktop
            style={{ ...(!restProps.disabled && { background: backgroundColor }) }}
            {...restProps}
            view='primary'
            ref={ref}
            className={cn(
                styles.customButton,
                styles.border,
                className,
                styles[contentColor],
                styles[stateType],
                {
                    [styles.customLoading]: loading,
                },
            )}
            loading={loading}
        >
            {children}
        </ButtonDesktop>
    ),
);

CustomButtonDesktop.displayName = 'CustomButtonDesktop';
