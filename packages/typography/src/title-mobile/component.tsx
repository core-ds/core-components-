import React, { forwardRef } from 'react';

import { Title, TitleProps } from '../title/component';

import commonStyles from '../title/common.module.css';
import styles from './index.module.css';

export type TitleMobileProps = Omit<TitleProps, 'defaultMargins'>;

export const TitleMobile = forwardRef<HTMLHeadingElement | HTMLDivElement, TitleProps>(
    (props, ref) => <Title {...props} styles={Object.assign(commonStyles, styles)} ref={ref} />,
);
