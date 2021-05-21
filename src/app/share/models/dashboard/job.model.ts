import { jobItemModel } from './job-item.model';

export interface JobModel{
    description: string;
    items: Array<jobItemModel>;
    title: string;
}
