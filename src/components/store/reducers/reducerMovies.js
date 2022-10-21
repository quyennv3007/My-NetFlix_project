import * as Type from '../type'

const reducerMoviesInitialState ={
    NetflixOriginals: null,
    TrendingMovies: null,
    TopRateMovies: null,
    MovieDetail:null,
    SearchMovies:null,
    DetailMovies:null,

}
const reducerMovies = (state = reducerMoviesInitialState, action) =>{
    const {type, payload} = action
    switch (type){
        case Type.GET_NETFLIX_ORIGINALS:         
            return{...state, NetflixOriginals: payload}

        case Type.GET_TRENDING_MOVIES:         
            return{...state, TrendingMovies: payload}

        case Type.GET_TOP_RATED_MOVIES:         
            return{...state, TopRateMovies: payload}

        case Type.SET_MOVIE_DETAIL:         
            return{...state, MovieDetail: payload}

        case Type.GET_SEARCH_MOVIES:         
            return{...state, SearchMovies: payload}
        
        case Type.SET_DETAIL_MOVIES:         
            return{...state, DetailMovies: payload}

        default:
            return state
    }
}
export default reducerMovies;