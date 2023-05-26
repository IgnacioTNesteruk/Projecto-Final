export const SELECTED_GAMES = "SELECTED_GAMES"
export const FILTERED_GAMES = "FILTERED_GAMES"

export const selectedGames = id =>({
    type: SELECTED_GAMES,
    gamesId: id,
})

export const filteredGames = id =>({
    type: FILTERED_GAMES,
    categoryId: id,
})