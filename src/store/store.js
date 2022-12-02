import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootStore from "./reducers";

export const store = createStore(rootStore, composeWithDevTools());
