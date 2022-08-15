import { combineReducers } from '@reduxjs/toolkit'
import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import ThunkMiddleware from 'redux-thunk'
import loginReducer from './login'
import userReducer from './user'
import seachReducer from './search'
import suggestionsReducer from './suggestions'

const rootReducer = combineReducers({
  login: loginReducer,
  search: seachReducer,
  user: userReducer,
  suggestions: suggestionsReducer,
})
const persistConfig = {
  key: 'root',
  whitelist: ['login'],
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store: Store<any, AnyAction> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ThunkMiddleware))
)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
