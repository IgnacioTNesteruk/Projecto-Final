import { GAMES } from "../../data/games"
import { SELECTED_GAMES, FILTERED_GAMES } from "../actions/games.action.js";

const initialState = {
    games: GAMES,
    filteredGames: [],
    selected: null,
}

const GamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_GAMES:
            return {
                ...state,
                selected: state.games.find(
                    games => games.id === action.gamesId
                ),
            };
        case FILTERED_GAMES:
            return {
                ...state,
                filteredGames: state.games.filter(
                    games => games.category === action.categoryId
                ),
            };
        default:
            return state;
    };
};

export default GamesReducer;
