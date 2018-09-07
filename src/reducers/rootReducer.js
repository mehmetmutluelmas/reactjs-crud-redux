import { combineReducers } from 'redux';

import authorizationsReducer from './authorizationsReducer';

import usersReducer from './usersReducer';
import usersSingleReducer from './usersSingleReducer';
import usersNewReducer from './usersNewReducer';
import usersUpdateReducer from './usersUpdateReducer';
import usersDeleteReducer from './usersDeleteReducer';
import usersLogin from './usersLogin';
//import newUsersReducer from './newUsers';


export default combineReducers({
  usersReducer,
  usersSingleReducer,
  usersNewReducer,
  usersUpdateReducer,
  usersDeleteReducer,
  usersLogin,
  authorizationsReducer,

})