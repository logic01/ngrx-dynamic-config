import { Config } from './../../models/config';
import { User } from './../../models/user';

export interface AppState {
    config: Config;
    user: User;
}
