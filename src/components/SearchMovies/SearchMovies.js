import React, { useEffect } from "react";
import { useViewport } from "../hooks";
import './SearchMovies.scss';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "react-router-dom";
import { getSearchMovies, setMovieDetail } from "../store/action";



const useQuery =() => new URLSearchParams(useLocation().search);

function SearchMovies() {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const {SearchMovies} = useSelector(state => state.infoMovies);
    const keywords = useQuery().get('keywords');

    console.log(SearchMovies)
  
    useEffect(()=>{   
        if(keywords) dispatch(getSearchMovies(keywords))
        
    },[keywords, dispatch]);

    

    return (
        <div className="searchPane">
            {
                SearchMovies && SearchMovies.length > 0 ? (
                    <div
                        className="SearContent"
                        style={{
                            gridTemplateColumns: `repeat(${windowWidth > 1200 ? 5 :
                                    windowWidth > 992 ? 4 :
                                        windowWidth > 768 ? 3 :
                                            windowWidth > 600 ? 2 : 1
                                },auto)`
                        }}
                    >
                        {
                            SearchMovies.map((movie, index) => {
                                if(movie.backdrop_path !== null && movie.media_type !== 'person'){
                                    const imageUrl =  `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
                                    return (
                                        <div className="movieItem"
                                             key={index}
                                             onClick={()=> dispatch(setMovieDetail(movie))}
                                        >
                                            <img  src={imageUrl} alt='searchMovies' />
                                            <span>{movie.title || movie.name}</span>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                ) : (
                    <div className="NotFound">
                        <h1> KẾT QUẢ TÌM KIẾM: {keywords}</h1>
                        <span>Không tìm thấy kết quả nào phù hộp</span>
                    </div>
                )
            }
        </div>
    );
}

export default SearchMovies;