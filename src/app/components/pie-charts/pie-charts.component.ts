import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ChartOptions } from './models/pie-chart-config.model';
import { PieChartItem } from './models/pie-chart-item.model';
import { PieChartModel } from './models/pie-chart.model';
import { PieChartconfig } from './configs/pie-chart-config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pie-charts',
  templateUrl: './pie-charts.component.html'
})

export class PieChartsComponent implements OnInit , OnDestroy {
  private pieChartsArray: PieChartModel[];
  public charts: Array<Partial<ChartOptions>> = [];
  private pieChartStatus$:Subscription;

  constructor(private store: Store<{ DashboardState: { pieCharts: PieChartModel[] } }>) { }

  ngOnInit() {
    this.selectChartArray();
  }

  private selectChartArray() {
    this.store.select('DashboardState').pipe(
      map(result => {
        return result.pieCharts;
      }))
      .subscribe((pieCharts: any) => {
        this.pieChartsArray = pieCharts;
        if (this.pieChartsArray?.length) {
          this.charts = [];
          this.createOptionArray(this.pieChartsArray.length);
        }
      });
  }

  private createOptionArray(length: number) {
    const chartOptions: Partial<ChartOptions> = new PieChartconfig().chartOptions;
    for (let index = 0; index < length; index++) {
      this.charts.push(Object.assign({}, { ...chartOptions }));
    }
    this.fillChartsArray();
  }

  private fillChartsArray() {
    this.pieChartsArray.map((pieChart: PieChartModel, index: number) => {
      this.charts[index].title = { ...this.charts[index].title, text: pieChart.title };
      const chartData = this.getChartData(pieChart);
      this.charts[index].labels = chartData.labels;
      this.charts[index].series = chartData.series;
    });
  };

  private getChartData(chart: PieChartModel) {
    let chartOpetions: Partial<ChartOptions> = { labels: [], series: [] };
    chart.items.map((item: PieChartItem) => {
      chartOpetions.labels.push(item.key);
      chartOpetions.series.push(item.value);
    });
    return chartOpetions;
  }

  ngOnDestroy(){
    this. pieChartStatus$.unsubscribe();
  }
}