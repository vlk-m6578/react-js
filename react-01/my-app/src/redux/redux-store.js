import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import usersPageReducer from "./usersPageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer,
  usersPage: usersPageReducer
});

let store = configureStore({ reducer: reducers });

window.store = store;

export default store;