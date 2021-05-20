import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockService } from './core/services/mock.service';
import { Store } from '@ngrx/store';
import * as UpdateDashboardData from "./store/actions/dashboard.actions";
import { DashboardDataModel } from './share/models/dashboard/dashboard-data.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit , OnDestroy {
  isloadPage = false;
  private mockDataStatus$:Subscription;
  private scopeFilterStatus$:Subscription;
  
  constructor(
    private mockService: MockService,
    private store: Store<{ DashboardState:DashboardDataModel }>) { }

  ngOnInit() {
    this.updateFilter();
  }

  private updateFilter() {
    this.scopeFilterStatus$ = this.mockService.scopeFilter
      .subscribe(scopeFilterName => {
        this.getMockService(scopeFilterName);
      });
  }

  private getMockService(scopeFilterName?) {
    this.updateIsLoadData(true);
    this.mockDataStatus$ = this.mockService.getmock(scopeFilterName).subscribe((result: any) => {
      this.store.dispatch(new UpdateDashboardData.UpdateDashboardData(result));
      this.updateIsLoadData(false);
      this.isloadPage = true;
      this.smoothScrolling();
    });
  }

  private updateIsLoadData(status){
    this.mockService.isLoadData.next(status);
  }

  private smoothScrolling(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnDestroy(){
    this.mockDataStatus$.unsubscribe();
    this.scopeFilterStatus$.unsubscribe();
  }


}
