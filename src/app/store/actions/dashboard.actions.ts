import { Action } from "@ngrx/store";
import { DashboardDataModel } from "src/app/share/models/dashboard/dashboard-data.model";

export const UPDATE_DASHBOARDDATA = 'UPDATE_DASHBOARDDATA';
export const UPDATE_SCOPFILTER = 'UPDATE_SCOPFILTER';
export const UPDATE_ISLOADING = 'UPDATE_ISLOADING';

export class UpdateDashboardData implements Action {
    readonly type = UPDATE_DASHBOARDDATA;
    constructor(public payload: DashboardDataModel) { }
}
export type DashboardActions = UpdateDashboardData ;

