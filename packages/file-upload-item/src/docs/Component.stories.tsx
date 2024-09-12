import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { text, number, select, boolean } from '@storybook/addon-knobs';
import { FileUploadItem } from '@alfalab/core-components-file-upload-item';

const meta: Meta<typeof FileUploadItem> = {
    title: 'Components/FileUploadItem',
    component: FileUploadItem,
    id: 'FileUploadItem',
};

type Story = StoryObj<typeof FileUploadItem>;

export const file_upload_item: Story = {
    name: 'FileUploadItem',
    render: () => {
        return (
            <div style={{ width: 456 }}>
                <FileUploadItem
                    title={text('title', 'Прикрепите файл')}
                    subtitle={text('subtitle', 'Нет файла')}
                    uploadDate={text('uploadDate', '22.01.2018')}
                    downloadLink={text('downloadLink', '')}
                    error={text('error', '')}
                    size={number('size', 500000000)}
                    progressBar={number('progressBar', 270)}
                    uploadStatus={select(
                        'uploadStatus',
                        ['INITIAL', 'ERROR', 'SUCCESS', 'UPLOADING'],
                        'INITIAL',
                    )}
                    uploadPercent={number('uploadPercent', undefined)}
                    showDelete={boolean('showDelete', false)}
                    showRestore={boolean('showRestore', false)}
                >
                    <FileUploadItem.LeftAddon />
                    <FileUploadItem.Content />
                    <FileUploadItem.RightAddon />
                </FileUploadItem>
            </div>
        );
    },
};

export const file_upload_item_left_addon: Story = {
    name: 'FileUploadItem.LeftAddon',
    render: () => {
        return (
            <div style={{ width: 456 }}>
                <FileUploadItem
                    fileType={select(
                        'fileType',
                        [
                            'attach',
                            'pdf',
                            'doc',
                            'xls',
                            '1c',
                            'document',
                            'deleted-image',
                            'deleted-document',
                        ],
                        'attach',
                    )}
                    iconStyle={select('iconStyle', ['gray', 'colored'], 'gray')}
                    progressBar={number('progressBar', 270)}
                    uploadStatus={select(
                        'uploadStatus',
                        ['INITIAL', 'ERROR', 'SUCCESS', 'UPLOADING'],
                        'INITIAL',
                    )}
                >
                    <FileUploadItem.LeftAddon />
                </FileUploadItem>
            </div>
        );
    },
};

export default meta;
