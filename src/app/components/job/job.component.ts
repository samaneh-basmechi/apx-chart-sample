import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DashboardDataModel } from 'src/app/share/models/dashboard/dashboard-data.model';
import { JobModel } from 'src/app/share/models/dashboard/job.model';
import { JobAvgModel } from './models/job-avg.model';
import { JobDataModel } from './models/job-data.model';
import { JobTotalModel } from './models/job-total.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html'
})
export class JobComponent implements OnInit , OnDestroy {

  public jobData: JobDataModel;
  private jobStatus$: Subscription;

  constructor(private store: Store<{ DashboardState: DashboardDataModel }>) { }

  ngOnInit(): void {
    this.getTableData();
  }

  private getTableData() {
    this.jobStatus$ = this.store.select('DashboardState')
      .pipe(
        map((dashboardDataArray: DashboardDataModel) => {
          return dashboardDataArray.job;
        }))
      .subscribe((job: JobModel) => {
        job && this.createNewTableDataModel(job);
      });
  }

  private createNewTableDataModel(job: JobModel): void {
    const items: Array<JobAvgModel> = [];
    job.items.map((item) => { if (item.avg) { items.push(item as JobAvgModel); } });
    const description: JobTotalModel = job.items.map((item) => item.total && (item as JobTotalModel))[0];
    this.jobData = {
      items,
      title: job.title,
      description
    };
  }

  ngOnDestroy(): void{
    this.jobStatus$.unsubscribe();
  }

}
