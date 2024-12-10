import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import { Button } from '@alfalab/core-components-button';

import { DEFAULT_BUTTON_COLOR, DEFAULT_CONTENT_COLOR } from './constants/default-colors';
import { ComponentProps } from './types/props';

import styles from './index.module.css';

type AnchorButtonProps = ComponentProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type NativeButtonProps = ComponentProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type CustomButtonProps = Partial<AnchorButtonProps | NativeButtonProps>;

export const CustomButton = React.forwardRef<
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
            disableType = 'default',
            ...restProps
        },
        ref,
    ) => (
        <Button
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
                styles[`disableType-${disableType}`],
            )}
            loading={loading}
        >
            {children}
        </Button>
    ),
);

CustomButton.displayName = 'CustomButton';
