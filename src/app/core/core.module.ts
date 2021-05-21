import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './header/scope-filter/loading/loading.component';
import { ScopeFilterComponent } from './header/scope-filter/scope-filter.component';
@NgModule({
  declarations: [
    HeaderComponent ,
    LoadingComponent,
    ScopeFilterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ],
  exports: [HeaderComponent]
})
export class CoreModule { }
