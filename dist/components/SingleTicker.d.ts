import React from "react";
export declare type SingleTickerWidgetProps = {
    symbol?: string;
    width?: string | number;
    colorTheme?: string;
    isTransparent?: boolean;
    locale?: string;
};
declare type SingleTickerProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: SingleTickerWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const SingleTicker: (props: SingleTickerProps) => JSX.Element;
export default SingleTicker;
//# sourceMappingURL=SingleTicker.d.ts.map