import React, { useEffect } from "react";
import './MovieDetail.scss'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from "react-redux";
import { setDetailMovies } from "../store/action";


function DetailTrailer(props) {

  const  {videoTrailer} = props;

  const dispatch = useDispatch();
  const {DetailMovies} = useSelector(state => state.infoMovies);



  const movie = 'movie';
  
  useEffect(()=>{ 
      if(videoTrailer.media_type && videoTrailer.id) {
         dispatch(setDetailMovies(videoTrailer.media_type, videoTrailer.id))
    }else{
        dispatch(setDetailMovies(movie, videoTrailer.id))
    }
      
  },[videoTrailer.media_type ,videoTrailer.id,movie, dispatch]);

  const videoTrailerKey = `https://www.youtube.com/embed/${DetailMovies && (DetailMovies[0].key)}`;
    
    return ( 
        <div className="DetailTrailer-movies">
            <ReactPlayer
                playing={true}
                loop={true}
                width="600px"
                height="350px"
                volume={1}
                controls={true}
                muted={true}                
                url={videoTrailerKey}   
                className="videoDetailTrailer"
            />
        </div>
     );
}

export default DetailTrailer;