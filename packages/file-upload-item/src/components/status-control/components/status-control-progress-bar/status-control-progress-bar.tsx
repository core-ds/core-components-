import React, { FC } from 'react';

type ProgressBarProps = {
    className: string;
};

export const StatusControlProgressBar: FC<ProgressBarProps> = ({ className }) => (
    <svg
        width='56'
        height='56'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
    >
        <mask
            id='b'
            style={{ maskType: 'alpha' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='56'
            height='56'
        >
            <mask id='a' fill='#fff'>
                <path d='M15.855.814C19.13.345 23.178 0 28 0c4.822 0 8.87.345 12.145.814 7.916 1.133 13.908 7.125 15.041 15.041C55.655 19.13 56 23.178 56 28c0 4.822-.345 8.87-.814 12.145-1.133 7.916-7.125 13.908-15.041 15.041C36.87 55.655 32.822 56 28 56c-4.822 0-8.87-.345-12.145-.814C7.94 54.053 1.947 48.061.814 40.145.345 36.87 0 32.822 0 28c0-4.822.345-8.87.814-12.145C1.947 7.94 7.939 1.947 15.855.814Z' />
            </mask>
            <path
                d='m15.855.814.284 1.98-.284-1.98Zm24.29 0-.284 1.98.284-1.98Zm15.041 15.041-1.98.284 1.98-.284Zm0 24.29-1.98-.284 1.98.284ZM40.145 55.186l-.284-1.98.284 1.98Zm-24.29 0 .284-1.98-.284 1.98ZM.814 40.145l1.98-.284-1.98.284Zm0-24.29-1.98-.283 1.98.283ZM28-2c-4.918 0-9.061.352-12.428.834l.567 3.96C19.319 2.338 23.274 2 28 2v-4Zm12.428.834C37.061-1.648 32.918-2 28-2v4c4.726 0 8.68.338 11.861.794l.567-3.96Zm16.738 16.738C55.907 6.776 49.224.092 40.428-1.166l-.567 3.96C46.9 3.8 52.2 9.102 53.206 16.139l3.96-.567ZM58 28c0-4.918-.352-9.061-.834-12.428l-3.96.567C53.662 19.319 54 23.274 54 28h4Zm-.834 12.428C57.648 37.061 58 32.918 58 28h-4c0 4.726-.338 8.68-.794 11.861l3.96.567ZM40.428 57.166c8.796-1.259 15.48-7.942 16.738-16.738l-3.96-.567C52.2 46.9 46.898 52.2 39.861 53.206l.567 3.96ZM28 58c4.918 0 9.061-.352 12.428-.834l-.567-3.96C36.681 53.662 32.726 54 28 54v4Zm-12.428-.834c3.367.482 7.51.834 12.428.834v-4c-4.726 0-8.68-.338-11.861-.794l-.567 3.96ZM-1.166 40.428c1.259 8.796 7.942 15.48 16.738 16.738l.567-3.96C9.102 52.2 3.8 46.898 2.794 39.861l-3.96.567ZM-2 28c0 4.918.352 9.061.834 12.428l3.96-.567C2.338 36.681 2 32.726 2 28h-4Zm.834-12.428C-1.648 18.939-2 23.082-2 28h4c0-4.726.338-8.68.794-11.861l-3.96-.567ZM15.572-1.166C6.776.093.092 6.776-1.166 15.572l3.96.567C3.8 9.102 9.102 3.8 16.139 2.794l-.567-3.96Z'
                fill='#000'
                mask='url(#a)'
            />
        </mask>
        <g mask='url(#b)'>
            <circle cx='28' cy='28' r='32' />
        </g>
    </svg>
);
