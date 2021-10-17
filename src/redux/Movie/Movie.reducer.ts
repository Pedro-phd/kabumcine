import { IReduxAction, IMovieReducer } from '../../typings'

const initialState:IMovieReducer = {
      movieList:[]
}

export default function MovieReducer(state = initialState, action: IReduxAction) {
    switch(action.type) {
        case 'ADD':
            return {
                movieList: action.payload
            }
        case 'REMOVE':
            return {
                movieList: action.payload
            }
        case 'SEARCH':
            return {
                movieList: action.payload
            }
        default:
            return state
    }
}
