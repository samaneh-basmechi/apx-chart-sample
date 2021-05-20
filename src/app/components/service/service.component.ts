import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { DashboardDataModel } from 'src/app/share/models/dashboard/dashboard-data.model';
import { ServiceModel } from 'src/app/share/models/dashboard/service.model';
import { ServiceAvgModel } from './models/service-avg.model';
import { ServiceDataModel } from './models/service-data.model';
import { ServiceTotalModel } from './models/service-total.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html'
})
export class ServiceComponent implements OnInit {

  public serviceData: ServiceDataModel;

  constructor(private store: Store<{ DashboardState: DashboardDataModel }>) { }

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData() {
    this.store.select('DashboardState')
      .pipe(
        map((dashboardDataArray: DashboardDataModel) => {
          return dashboardDataArray.service;
        }))
      .subscribe((service: ServiceModel) => {
        service && this.createNewTableDataModel(service);
      });
  }

  private createNewTableDataModel(service: ServiceModel) {
    const items: Array<ServiceTotalModel> = [];
    service.items.map((item) => { if (item.total) items.push(item as ServiceTotalModel) });
    const description: ServiceAvgModel = service.items.map((item) => { return item.total && (item as ServiceAvgModel) })[0];
    this.serviceData = {
      items: items,
      title: service.title,
      description: description
    };
  }
}
