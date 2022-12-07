import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootStore from "./reducers";
import {setLocalStorageData} from "../utils/localStorage";

export const store = createStore(rootStore, composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(()=>{
    setLocalStorageData('store', store.getState().favorite)
})