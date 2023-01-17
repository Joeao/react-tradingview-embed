import React from "react";
export declare type EconomicCalendarWidgetProps = {
    colorTheme?: string;
    isTransparent?: boolean;
    width?: string | number;
    height?: string | number;
    locale?: string;
    importanceFilter?: string;
};
declare type EconomicCalendarProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: EconomicCalendarWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const EconomicCalendar: (props: EconomicCalendarProps) => JSX.Element;
export default EconomicCalendar;
//# sourceMappingURL=EconomicCalendar.d.ts.map