import { ChartOptions } from "../models/line-chart-config.model";
export class LineChartconfig {
    public chartOption: Partial<ChartOptions> = {
        series: [],
        chart: {
            height: 350,
            type: "line",
            zoom: {
                enabled: true,
                autoScaleYaxis: true
            },
            toolbar: {
                show: true
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth"
        },
        title: {
            text: "",
            align: "left",
            style: {
                fontFamily: "roboto"
            }
        },
        grid: {
            row: {
                colors: ["#f3f3f3", "transparent"],
                opacity: 0.5
            }
        },
        legend: {
            position: "top",
            horizontalAlign: "center",
            floating: true,
            offsetY: -35,
            offsetX: -5,
            fontFamily: "roboto"
        },
        xaxis: {
            max: 30,
            offsetX: 5,
            categories: [],
            title: {
                text: "Dates",
                style: {
                    fontFamily: "roboto"
                }
            },
            labels: {
                style: {
                    fontFamily: "roboto"
                }
            }
        }
    }
}
