import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { StoreModule } from '@ngrx/store';
import { PieChartsComponent } from './components/pie-charts/pie-charts.component';
import { LineChartsComponent } from './components/line-charts/line-charts.component';
import { CoreModule } from './core/core.module';
import { AppReducers } from './store/reducers/dashboard.reducers';
import { ProgressComponent } from './components/rating/components/progress/progress.component';
import { RatingComponent } from './components/rating/rating.component';
import { StarComponent } from './components/rating/components/star/star.component';
import { PageLoadingComponent } from './components/page-loading/page-loading.component';
import { JobComponent } from './components/job/job.component';
import { ServiceComponent } from './components/service/service.component';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    LineChartsComponent,
    PieChartsComponent,
    RatingComponent,
    ProgressComponent,
    StarComponent,
    PageLoadingComponent,
    JobComponent,
    ServiceComponent,
  ],
  imports: [
    BrowserModule,
    NgApexchartsModule,
    CoreModule,
    ShareModule,
    StoreModule.forRoot({
      DashboardState: AppReducers,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
