import { RatingItemModel } from "./rating-item.model";

export interface RatingModel {
    avg: number;
    description: string;
    items: Array<RatingItemModel>;
    title: string
    totalVote: number
}

