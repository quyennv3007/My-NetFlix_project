import React from "react";
import './MoviesRow.scss';
import MoviesRow from "./MoviesRow";
import { useDispatch, useSelector } from 'react-redux'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import { useEffect } from "react";
import { getNetflixOriginals, getTopRateMovies, getTrendingMovies } from "../store/action";
import { animateScroll as scroll} from 'react-scroll';
import { useStrollY } from "../hooks";
import { BiCameraMovie } from 'react-icons/bi'
import Moviestrending from "./Moviestrending";
import MoviesRowTopRate from "./MoviesRowTopRate";
import MoviesTheaters from "./MoviesTheaters";
import Footer from "./Footer";

const ScrollToTop = ()=>{
        scroll.scrollToTop();

}

function Contents() {
    const dispatch = useDispatch();
    const [scrolly] = useStrollY();
    const {NetflixOriginals,
           TrendingMovies,
           TopRateMovies} = useSelector(state => state.infoMovies);

    useEffect(()=>{
        dispatch(getNetflixOriginals());
        dispatch(getTrendingMovies());
        dispatch(getTopRateMovies());
    },[dispatch])

    

    return ( 
        <div>
            <MoviesRow movies={NetflixOriginals} icon={BiCameraMovie} title='Netflix Originals' isNetflix={true} isSection="netflix"/>
            <Moviestrending movies={TrendingMovies} title='Trending' isSection="trending"/>
            <MoviesTheaters movies={TopRateMovies} title='Movie Theaters' isSection="toprated"/>
            <MoviesRowTopRate movies={TopRateMovies} title='Top Rated' isSection="toprated" isNetflix={true}/>
            <Footer/>
            <div className="GoToTop" 
                onClick={()=> ScrollToTop()}
                style={{
                    visibility:`${scrolly > 100 ? 'visible':'hidden'}`
                }}
            >
                <FaArrowAltCircleUp/>
            </div>
        </div>
        
     );
}

export default Contents;