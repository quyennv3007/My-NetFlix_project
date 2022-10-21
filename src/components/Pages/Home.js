import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Contents from "../Contents/Contents";
import Intro from "../Intro/Intro";
// import Menus from "../Menus/Menus";
import MoviesDetail from "../MovieDetail/MovieDetail";

function Home(props) {

    const {MovieDetail} = useSelector(state => state.infoMovies)
    const [isShowMovieDetail, setShowMovieDetail] = useState(false);

    useEffect(()=>{
        setShowMovieDetail(MovieDetail ? true : false)
    },[MovieDetail])

    return ( 
        <div>
        <Intro/>
        <Contents/>
        {/* <Menus/> */}
        <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail}/>
        </div>
     );
}

export default Home;