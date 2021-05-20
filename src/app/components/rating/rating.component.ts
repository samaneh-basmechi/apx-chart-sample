import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { OldRatingModel } from './models/old-rating-info.models';
import { RatingItemModel } from './models/rating-item.model';
import { RatingModel } from './models/rating.model';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit , OnDestroy{
  public rating: RatingModel;
  private ratingStatus$:Subscription;

  constructor(private store: Store<{ DashboardState: { rating: OldRatingModel } }>) { }

  ngOnInit() {
    this.store.select('DashboardState')
      .pipe(map(result => { return result.rating }))
      .subscribe(result => {
        this.calcTotalCountOfRate(result);
      });
  }

  private calcTotalCountOfRate(rating) {
    let sum: number = 0
    for (const key in rating.items) {
      if (Object.prototype.hasOwnProperty.call(rating.items, key)) {
        const count: number = rating.items[key];
        sum = count + sum;
        (key === '5') && (rating = Object.assign({ ...rating }, { totalCount: sum }))
      }
    }
    this.calcPercentRates(rating)
  }

  private calcPercentRates(rating) {
    const ratesInfoItems: Array<RatingItemModel> = [];
    for (const key in rating.items) {
      if (Object.prototype.hasOwnProperty.call(rating.items, key)) {
        const count: number = rating.items[key];
        const percent = `${Math.floor((count * 100) / rating.totalCount)}%`;
        ratesInfoItems.push({ percent: percent, vote: rating.items[key], starNumber: key });
      }
    }
    rating.items = ratesInfoItems;
    this.rating = rating;
  }

  ngOnDestroy(){
    this.ratingStatus$.unsubscribe();
  }
}
