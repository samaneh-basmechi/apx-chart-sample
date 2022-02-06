import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { DashboardDataModel } from 'src/app/share/models/dashboard/dashboard-data.model';

@Injectable({
  providedIn: 'root'
})

export class MockService {
  public isLoadData = new BehaviorSubject(false);
  public scopeFilter = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public getmock(scopeFilterName?) {
    return this.http.get(`https://skyrim.whipmobility.io/v10/analytic/dashboard/operation/mock${scopeFilterName ? `?scop=${scopeFilterName}` : ''}`)
      .pipe(
        map((result: any) => result.response.data.analytics as DashboardDataModel),
        tap(() => { },
          (err: any) => {
            if (err instanceof HttpErrorResponse) {
              alert(err.status + ' ' + 'Error occurred');
            }
          })
      );
  }

}
