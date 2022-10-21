import axios from 'axios';
import * as type from '../type'
 
const API_KEY ='b002a2286b12492380d07bad698f7737';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({type: type.GET_NETFLIX_ORIGINALS, payload: result.data.results})
    }catch(error){
        console.log('Get Netflix Api error', error)
    }
}

export const getTrendingMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: type.GET_TRENDING_MOVIES, payload: result.data.results})
    }catch(error){
        console.log('GeT trending movies Api error', error)
    }
}

export const getTopRateMovies = () => async dispatch => {
    try{
        const result = await axios.get(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`
        );
        dispatch({type: type.GET_TOP_RATED_MOVIES, payload: result.data.results})
    }catch(error){
        console.log('GeT top rated Api error', error)
    }
}

export const setMovieDetail = (movie)=> dispatch =>{
    dispatch({type: type.SET_MOVIE_DETAIL, payload:movie})

}

export const getSearchMovies = (keywords) => async (dispatch) =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US& include_adult=false&query=${keywords}`
        )
        dispatch({type: type.GET_SEARCH_MOVIES, payload:result.data.results})
    } catch (error) {
        console.log('GeT Search Movies error', error)
    }
}

export const setDetailMovies = (media_type,IdMovies) => async (dispatch) =>{
    try {
        const result = await axios.get(
            `${BASE_URL}/${media_type}/${IdMovies}/videos?api_key=${API_KEY}&language=en-US`
        )
        dispatch({type: type.SET_DETAIL_MOVIES, payload:result.data.results})
    } catch (error) {
        console.log('Set detail Movies error', error)
    }
}