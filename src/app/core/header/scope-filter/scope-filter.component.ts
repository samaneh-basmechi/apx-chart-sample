import { Component } from '@angular/core';
import { MockService } from '../../services/mock.service';
import { ScopeFilterModel } from './models/scope-filter.model';

@Component({
  selector: 'app-scope-filter',
  templateUrl: './scope-filter.component.html',
  styleUrls: ['./scope-filter.component.scss']
})

export class ScopeFilterComponent{
  scopeNameArray: Array<ScopeFilterModel> = ['ALL', 'TODAY', 'LAST_7_DAYS', 'LAST_30_DAYS'];

  constructor(public service: MockService) {}

  selectFilter(scopeName: ScopeFilterModel) {
    this.service.scopeFilter.next(scopeName);
  }

}
