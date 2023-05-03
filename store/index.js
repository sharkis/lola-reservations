import { createContext } from "react";
import initialState from "./hydrate";
import reducer from "./reducer";

const StoreContext = createContext();

export {initialState, reducer, StoreContext};