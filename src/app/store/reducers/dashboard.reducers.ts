import { DashboardDataModel } from 'src/app/share/models/dashboard/dashboard-data.model';
import * as DashboardActions from '../actions/dashboard.actions';

const initialState: DashboardDataModel = null;
export function AppReducers(state = initialState, action: DashboardActions.DashboardActions): DashboardDataModel {
    switch (action.type) {
        case DashboardActions.UPDATE_DASHBOARDDATA:
            return action.payload;

        default:
            return state;
    }
}
