import { LineChartModel } from 'src/app/components/line-charts/models/line-chart.model';
import { PieChartModel } from 'src/app/components/pie-charts/models/pie-chart.model';
import { RatingModel } from 'src/app/components/rating/models/rating.model';
import { JobModel } from './job.model';
import { ServiceModel } from './service.model';

export interface DashboardDataModel {
    job: JobModel;
    lineCharts: Array<LineChartModel[]>;
    pieCharts: PieChartModel[];
    rating: RatingModel;
    service: ServiceModel;
    scopFilterName?: string;
    isLoadData?: boolean;
}
