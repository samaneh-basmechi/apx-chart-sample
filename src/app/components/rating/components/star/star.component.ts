import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OldRatingModel } from '../../models/old-rating-info.models';
@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  public starNumber: Observable<number>;

  constructor(private store: Store<{ DashboardState: { rating: OldRatingModel } }>) { }

  ngOnInit(): void {
    this.starNumber = this.store.select('DashboardState').pipe(map(result => result.rating.avg));
  }

}
