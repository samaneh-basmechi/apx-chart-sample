import { PieChartItem } from "./pie-chart-item.model";

export interface PieChartModel {
    chartType: string;
    description: string;
    items: Array<PieChartItem>;
    title: string;
}