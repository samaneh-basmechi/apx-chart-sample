import { Component, Input } from '@angular/core';
import { tableDataModel } from '../../models/table/table-data.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableData: tableDataModel;

}
