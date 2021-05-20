import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { LineChartconfig } from './configs/line-chart-config';
import { ChartOptions } from './models/line-chart-config.model';
import { LineChartItemValue } from './models/line-chart-item-value.model';
import { LineChartItem } from './models/line-chart-item.model';
import { LineChartSeries } from './models/Line-chart-series.model';
import { LineChartModel } from './models/line-chart.model';

@Component({
  selector: 'app-line-charts',
  templateUrl: './line-charts.component.html'
})

export class LineChartsComponent implements OnInit , OnDestroy {
  private lineChartsArray: LineChartModel[];
  public charts: Array<Partial<ChartOptions>> = [];
  private lineChartStatus$:Subscription;


  constructor(private store: Store<{ DashboardState: { lineCharts: Array<LineChartModel[]> } }>) { }

  ngOnInit() {
    this.selectChartArray();
  }

  private selectChartArray() {
    this.store.select('DashboardState')
      .pipe(
        map(result => {
          return result.lineCharts;
        })
      )
      .subscribe((lineCharts: Array<LineChartModel[]>) => {
        this.lineChartsArray = lineCharts[0];
        if (this.lineChartsArray?.length) {
          this.charts = [];
          this.createOptionArray(this.lineChartsArray.length);
        }
      });
  }

  private createOptionArray(length: number) {
    const chartOptions: Partial<ChartOptions> = new LineChartconfig().chartOption;
    for (let index = 0; index < length; index++) {
      this.charts.push(Object.assign({}, { ...chartOptions }));
    }
    this.fillChartsArray();
  }

  private fillChartsArray() {
    this.lineChartsArray.map((lineChart, index) => {
      this.charts[index].title.text = lineChart.title;
      this.charts[index].series = this.createChartSeries(lineChart)
      this.charts[index].xaxis.categories = this.createChartCategories(lineChart);
    });
  }

  private createChartCategories(lineChart: LineChartModel) {
    const categories: Array<string> = [];
    lineChart.items.map((item: LineChartItem) => {
      categories.push(item.key);
    });
    return categories;
  }

  private createChartSeries(lineChart: LineChartModel) {
    let series: Array<LineChartSeries> = [];
    series = this.createSeriesModel(lineChart);
    series = this.pushSeriesModel(series, lineChart);
    return series;
  }

  private createSeriesModel(lineChart: LineChartModel) {
    const series: Array<LineChartSeries> = [];
    lineChart.items[0].value.map((value: LineChartItemValue) => {
      series.push({ name: value.key, data: [] });
    });
    return series;
  }


  private pushSeriesModel(series: Array<LineChartSeries>, lineChart: LineChartModel) {
    lineChart.items.map((item: LineChartItem) => {
      item.value.map((object: LineChartItemValue) => {
        for (let index = 0; index < series.length; index++) {
          if (series[index].name == object.key) {
            series[index].data.push(object.value);
          }
        }
      });
    });
    return series;
  }

  ngOnDestroy(){
    this.lineChartStatus$.unsubscribe();
  }

}
