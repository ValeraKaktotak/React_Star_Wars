import {createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootStore from "./reducers";

export const store = createStore(rootStore, composeWithDevTools(
    applyMiddleware(thunk)
));
