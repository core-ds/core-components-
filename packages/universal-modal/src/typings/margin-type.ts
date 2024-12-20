type TMarginValue =
    | 0
    | 2
    | 4
    | 8
    | 12
    | 16
    | 20
    | 24
    | 32
    | 40
    | 48
    | 56
    | 64
    | 72
    | 80
    | 96
    | 128
    | 'auto';

export type TMargin =
    | [TMarginValue, TMarginValue, TMarginValue, TMarginValue]
    | [TMarginValue, TMarginValue, TMarginValue]
    | [TMarginValue, TMarginValue]
    | [TMarginValue];
