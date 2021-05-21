import { ServiceAvgModel } from './service-avg.model';
import { ServiceTotalModel } from './service-total.model';

export interface ServiceDataModel {
    description: ServiceAvgModel;
    items: Array<ServiceTotalModel>;
    title: string;
}
