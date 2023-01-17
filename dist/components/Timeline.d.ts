import React from "react";
export declare type TimelineWidgetProps = {
    colorTheme?: string;
    isTransparent?: boolean;
    displayMode?: string;
    width?: string | number;
    height?: string | number;
    locale?: string;
};
declare type TimelineProps = {
    parentStyle?: React.CSSProperties;
    widgetProps?: TimelineWidgetProps;
    widgetPropsAny?: any;
    children?: never;
};
declare const Timeline: (props: TimelineProps) => JSX.Element;
export default Timeline;
//# sourceMappingURL=Timeline.d.ts.map