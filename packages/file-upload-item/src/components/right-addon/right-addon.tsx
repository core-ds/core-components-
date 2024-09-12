import React from 'react';

import { IconButton } from '@alfalab/core-components-icon-button';
import ArrowDownLineDownCompactMIcon from '@alfalab/icons-glyph/ArrowDownLineDownCompactMIcon';
import ArrowsCwCompactMIcon from '@alfalab/icons-glyph/ArrowsCwCompactMIcon';
import CrossMIcon from '@alfalab/icons-glyph/CrossMIcon';

import { useRightAddon } from './hooks/useRightAddon';

import styles from './right-addon.module.css';

export const RightAddon = () => {
    const {
        downloadLink,
        showRestore,
        disableButtons,
        download,
        target,
        showDelete,
        handleDownload,
        handleDelete,
        handleRestore,
    } = useRightAddon();

    const showDownload = Boolean(downloadLink) && !showRestore;

    return (
        <div className={styles.container}>
            {showRestore && (
                <IconButton
                    className={styles.icon}
                    size='xxs'
                    aria-label='восстановить'
                    icon={<ArrowsCwCompactMIcon color='var(--color-light-text-tertiary)' />}
                    disabled={disableButtons}
                    onClick={handleRestore}
                />
            )}

            {showDownload && (
                <IconButton
                    className={styles.icon}
                    size='xxs'
                    aria-label='скачать'
                    icon={
                        <ArrowDownLineDownCompactMIcon color='var(--color-light-text-tertiary)' />
                    }
                    disabled={disableButtons}
                    href={downloadLink}
                    download={download}
                    target={target}
                    onClick={handleDownload}
                />
            )}

            {showDelete && !showRestore && (
                <IconButton
                    className={styles.icon}
                    size='xxs'
                    aria-label='удалить'
                    icon={<CrossMIcon color='var(--color-light-text-tertiary)' />}
                    disabled={disableButtons}
                    onClick={handleDelete}
                />
            )}
        </div>
    );
};
