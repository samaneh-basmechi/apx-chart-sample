import { OldRatingItemModel } from './old-rating-item.model';

export interface OldRatingModel {
    avg: number;
    description: string;
    items: OldRatingItemModel;
    title: string;
}
