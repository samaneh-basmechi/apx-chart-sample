import { Component, Input } from '@angular/core';
import { RateSatusModel } from '../../models/rate-satus.model';
import { RatingItemModel } from '../../models/rating-item.model';
import { ProgressColorConfig } from './configs/progress-color.config';
import { RateSatusEnum } from './enums/progress.enum';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent {
  @Input() percentageRate: RatingItemModel;
  public RateSatus = RateSatusEnum;
  public progressColors: RateSatusModel = new ProgressColorConfig().progressColors;

}
