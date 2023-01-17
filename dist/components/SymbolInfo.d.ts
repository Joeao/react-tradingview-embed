import React from "react";
export declare type SymbolInfoWidgetProps = {
    symbol?: string;
    width?: string | number;
    locale?: string;
    colorTheme?: string;
    isTransparent?: boolean;
};
declare type SymbolInfoProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: SymbolInfoWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const SymbolInfo: (props: SymbolInfoProps) => JSX.Element;
export default SymbolInfo;
//# sourceMappingURL=SymbolInfo.d.ts.map