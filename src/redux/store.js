import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from "redux-persist/lib/storage"; 

import { advertsReducer} from "./adverts/advert-slice";
// import filterReducer from "./filter/filter-slice";

export const rootReducer = combineReducers({
  adverts: advertsReducer,
    //   filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      }),      
})

export const persistor = persistStore(store);