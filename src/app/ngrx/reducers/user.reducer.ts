import { User } from './../../models/user';
import { UserActionsUnion, UserActionTypes } from './../actions/user.actions';

const initialState = new User();

export function userReducer(state: User = initialState, action: UserActionsUnion) {
    switch (action.type) {

        case UserActionTypes.GetUserSuccess:
        case UserActionTypes.GetUserError:
            return action.payload;

        default:
            return state;
    }
}
