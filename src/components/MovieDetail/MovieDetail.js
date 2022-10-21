import React, { useState } from "react";
import './MovieDetail.scss';
import { setMovieDetail } from "../store/action";
import { useDispatch } from "react-redux";
import DetailTrailer from "./DetailTrailer";


// const showModal =false; 

function MoviesDetail(props) {

    const [isShowDetailTrailer, setIsShowDetailTrailer] = useState(false)

    const handleWatchTrailer = () => {
        setIsShowDetailTrailer(prev => !prev)
    }


    const { movie, showModal } = props;
    
    
    console.log(movie)
    const dispatch = useDispatch();

    const hanleCloseModal = () => {
        dispatch(setMovieDetail(null))
        setIsShowDetailTrailer(false)

    }

    return (
        <div className="MovieDetailModal">
            <div className={`backdrop ${showModal ? 'showBackdrop' : 'hiddenBackdrop'}`}
                onClick={hanleCloseModal}
            ></div>
            <div className={`Modal ${showModal ? 'showModal' : 'hidenModal'}`}
                style={
                    movie ? {
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path})`,
                        backgroundSize: ' cover'
                    } : {}
                }
            >
                <div className="container">
                    <div className="movieInfo">
                        <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
                        <p className="statistical">
                            <span className="rating">Rating: {movie && (movie.vote_average).toFixed(1)}/10</span>
                            <span className="popularrity">Popularrity: {movie && movie.popularity} </span>
                        </p>
                        <p className="releaseDate">Release Date: {movie &&
                            (movie.release_date ||
                                movie.first_air_date)
                        }
                        </p>
                        <div className="BtnDetail">
                            <button
                                onClick={handleWatchTrailer}
                                className="watchTrailer"
                            >Watch trailer
                            </button>
                            <button className="watchNow">Watch Now</button>
                        </div>
                        <p className="overview"> {movie && movie.overview} </p>
                    </div>
                </div>

                <div className="MoviesTrailer">
                    {/* <div className='backdrop' ></div> */}
                    {
                        isShowDetailTrailer ? (
                            <DetailTrailer videoTrailer={movie}/>
                        ) : (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default MoviesDetail;