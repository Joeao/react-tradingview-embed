import React from "react";
export declare type ForexHeatMapWidgetProps = {
    width?: string | number;
    height?: string | number;
    currencies?: string[];
    isTransparent?: boolean;
    colorTheme?: string;
    locale?: string;
};
declare type ForexHeatMapProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: ForexHeatMapWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const ForexHeatMap: (props: ForexHeatMapProps) => JSX.Element;
export default ForexHeatMap;
//# sourceMappingURL=ForexHeatMap.d.ts.map