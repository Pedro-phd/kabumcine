import { IReduxAction, IMovieReducer } from '../../typings'

const initialState:IMovieReducer = {
      movieList:[]
}

export default function MovieReducer(state = initialState, action: IReduxAction) {
    switch(action.type) {
        case 'ADD':
            return {
                movieList: [
                    ...action.payload.movies,
                    {
                        title: action.payload.title,
                        categories: action.payload.categories,
                        labels:action.payload.labels,
                        favorite:action.payload.favorite,
                    }
                ]
            }
        case 'REMOVE':
            const movieList = action.payload.movies
            movieList.splice(action.payload.id,1)
            return {
                movieList: [...movieList]
            }
        default:
            return state
    }
}
