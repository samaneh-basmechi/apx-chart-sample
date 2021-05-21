import {Component, OnDestroy, OnInit} from '@angular/core';
import {MockService} from './core/services/mock.service';
import {Store} from '@ngrx/store';
import * as UpdateDashboardData from './store/actions/dashboard.actions';
import {DashboardDataModel} from './share/models/dashboard/dashboard-data.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private mockService: MockService,
    private store: Store<{ DashboardState: DashboardDataModel }>) {
  }

  isPageLoaded = false;
  private mockDataStatus$: Subscription;
  private scopeFilterStatus$: Subscription;

  private static smoothScrolling(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  ngOnInit(): void {
    this.updateFilter();
  }

  private updateFilter(): void {
    this.scopeFilterStatus$ = this.mockService.scopeFilter
      .subscribe(scopeFilterName => {
        this.getMockService(scopeFilterName);
      });
  }

  private getMockService(scopeFilterName?): void {
    this.updateIsLoadData(true);
    this.mockDataStatus$ = this.mockService.getmock(scopeFilterName).subscribe((result: any) => {
      this.store.dispatch(new UpdateDashboardData.UpdateDashboardData(result));
      this.updateIsLoadData(false);
      this.isPageLoaded = true;
      AppComponent.smoothScrolling();
    });
  }

  private updateIsLoadData(status): void {
    this.mockService.isLoadData.next(status);
  }

  ngOnDestroy(): void {
    this.mockDataStatus$.unsubscribe();
    this.scopeFilterStatus$.unsubscribe();
  }


}
