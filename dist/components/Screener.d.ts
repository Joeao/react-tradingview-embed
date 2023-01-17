import React from "react";
export declare type ScreenerWidgetProps = {
    width?: string | number;
    height?: string | number;
    defaultColumn?: string;
    defaultScreen?: string;
    market?: string;
    showToolbar?: boolean;
    colorTheme?: string;
    locale?: string;
};
declare type ScreenerProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: ScreenerWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const Screener: (props: ScreenerProps) => JSX.Element;
export default Screener;
//# sourceMappingURL=Screener.d.ts.map