import React from "react";
export declare type CryptocurrencyMarketWidgetProps = {
    width?: string | number;
    height?: string | number;
    defaultColumn?: string;
    screener_type?: string;
    displayCurrency?: string;
    colorTheme?: string;
    locale?: string;
};
declare type CryptocurrencyMarketProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: CryptocurrencyMarketWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const CryptocurrencyMarket: (props: CryptocurrencyMarketProps) => JSX.Element;
export default CryptocurrencyMarket;
//# sourceMappingURL=CryptocurrencyMarket.d.ts.map