import {createStore, combineReducers } from 'redux'
import MovieReducer from './Movie/Movie.reducer'

const rootReducer = combineReducers({
    movie: MovieReducer
})

const store = createStore(rootReducer)

export default store