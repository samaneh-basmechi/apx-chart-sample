import { JobItemModel } from './job-item.model';

export interface JobModel{
    description: string;
    items: Array<JobItemModel>;
    title: string;
}
