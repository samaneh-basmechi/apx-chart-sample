import { JobAvgModel } from "./job-avg.model";
import { JobTotalModel } from "./job-total.model";

export interface JobDataModel {
    description: JobTotalModel;
    items: Array<JobAvgModel>,
    title: string,
}