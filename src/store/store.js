import {createStore} from "redux";
import rootStore from "./reducers";

export const store = createStore(rootStore);
