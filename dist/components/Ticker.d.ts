import React from "react";
export declare type TickerWidgetProps = {
    colorTheme?: string;
    isTransparent?: boolean;
    showSymbolLogo?: boolean;
    locale?: string;
    symbols?: any;
};
declare type TickerProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: TickerWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const Ticker: (props: TickerProps) => JSX.Element;
export default Ticker;
//# sourceMappingURL=Ticker.d.ts.map