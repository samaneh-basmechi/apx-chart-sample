import { ServiceItemModel } from './service.item.model';
export interface ServiceModel{
    description: string;
    items: Array<ServiceItemModel>;
    title: string;
}
