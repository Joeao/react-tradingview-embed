import React from "react";
const StockMarket = (props) => {
    const { widgetProps, widgetPropsAny } = props;
    const ref = React.createRef();
    React.useEffect(() => {
        let refValue;
        if (ref.current) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/"
                + "embed-widget-hotlists.js";
            script.async = true;
            script.type = "text/javascript";
            script.innerHTML = JSON.stringify(Object.assign(Object.assign({ "colorTheme": "dark", "dateRange": "12M", "exchange": "US", "showChart": true, "locale": "en", "largeChartUrl": "", "isTransparent": false, "showSymbolLogo": false, "width": "400", "height": "600", "plotLineColorGrowing": "rgba(25, 118, 210, 1)", "plotLineColorFalling": "rgba(25, 118, 210, 1)", "gridLineColor": "rgba(42, 46, 57, 1)", "scaleFontColor": "rgba(120, 123, 134, 1)", "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)", "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)", "symbolActiveColor": "rgba(33, 150, 243, 0.12)" }, widgetProps), widgetPropsAny));
            ref.current.appendChild(script);
            refValue = ref.current;
        }
        return () => {
            if (refValue) {
                while (refValue.firstChild) {
                    refValue.removeChild(refValue.firstChild);
                }
            }
        };
    }, [ref, widgetProps, widgetPropsAny]);
    return React.createElement("div", { style: props.parentStyle, ref: ref });
};
export default StockMarket;
