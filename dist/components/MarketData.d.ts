import React from "react";
export declare type MarketDataWidgetProps = {
    width?: string | number;
    height?: string | number;
    showSymbolLogo?: boolean;
    colorTheme?: string;
    isTransparent?: boolean;
    locale?: string;
    symbolsGroups?: any;
};
declare type MarketDataProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: MarketDataWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const MarketData: (props: MarketDataProps) => JSX.Element;
export default MarketData;
//# sourceMappingURL=MarketData.d.ts.map