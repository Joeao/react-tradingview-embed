import React from "react";
export declare type ForexCrossRatesWidgetProps = {
    width?: string | number;
    height?: string | number;
    currencies?: string[];
    isTransparent?: boolean;
    colorTheme?: string;
    locale?: string;
};
declare type ForexCrossRatesProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: ForexCrossRatesWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const ForexCrossRates: (props: ForexCrossRatesProps) => JSX.Element;
export default ForexCrossRates;
//# sourceMappingURL=ForexCrossRates.d.ts.map