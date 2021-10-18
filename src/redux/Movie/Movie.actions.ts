import {IMovie,IMovieReducer} from '../../typings'
export function Add({title,categories,favorite}:IMovie,movies: IMovieReducer){

    const movieList = [
        ...movies.movieList,
        {title,categories,favorite}
    ]
    return {
        type: 'ADD',
        payload: movieList
    }
}
export function remove(id:number, movies:IMovieReducer){
    const movieList = movies.movieList
    movieList.splice(id,1)
    return {
        type: 'REMOVE',
        payload: movieList
    }
}

export function search(word:string, movies:IMovieReducer){
    const movieList = movies.movieList.filter((movie:IMovie) => movie.title.includes(word))
    return {
        type: 'SEARCH',
        payload: movieList
    }
}