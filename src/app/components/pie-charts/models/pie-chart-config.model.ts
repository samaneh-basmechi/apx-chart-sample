import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, ApexTheme, ApexTitleSubtitle, ApexLegend, ApexDataLabels } from 'ng-apexcharts';

export interface ChartOptions {
    series: Partial<ApexNonAxisChartSeries>;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: Array<string>;
    theme: ApexTheme;
    title: ApexTitleSubtitle;
    legend: ApexLegend;
    dataLabels: ApexDataLabels;
  }
