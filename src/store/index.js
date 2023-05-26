import { createStore,combineReducers } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import GamesReducer from "./reducers/Games.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    games: GamesReducer
});

export default createStore(RootReducer);
