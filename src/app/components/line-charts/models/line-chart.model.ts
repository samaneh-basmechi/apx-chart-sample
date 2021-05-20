import { LineChartItem } from "./line-chart-item.model";

export interface LineChartModel {
    chartType: string;
    description: string;
    items: Array<LineChartItem>;
    title: string;
}