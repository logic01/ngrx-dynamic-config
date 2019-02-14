import { Config } from './../../models/config';
import { ConfigActionsUnion, ConfigActionTypes } from './../actions/config.actions';

const initialState = new Config();

export function configReducer(state: Config = initialState, action: ConfigActionsUnion) {
    switch (action.type) {

        case ConfigActionTypes.GetConfigSuccess:
        case ConfigActionTypes.GetConfigError:
            return action.payload;

        default:
            return state;
    }
}
