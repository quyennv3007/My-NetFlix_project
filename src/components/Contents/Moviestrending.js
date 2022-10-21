import './Moviestrending.scss'
import styled from'styled-components';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import {SmothHorizontalScrolling} from '../../utils';
import { useViewport } from '../hooks';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from '../store/action';
import { BiCameraMovie } from 'react-icons/bi'
import { ImFilm } from 'react-icons/im'


function Moviestrending(props) {

    const {movies, title, isNetflix, isSection} = props;
    const sliderRef = useRef();
    const moviesRef = useRef();
    const [dragDown ,setDragDown] = useState(0)
    const [dragMove ,setDragMove] = useState(0)
    const [isDrag ,setDrag] = useState(false)
    const [windowWidth] = useViewport();

    const dispatch = useDispatch();

    const handleSetMovie =(movie) =>{
        dispatch(setMovieDetail(movie))
    }


    const handleScrollRight = () =>{
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        console.log(maxScrollLeft)
        if(sliderRef.current.scrollLeft < maxScrollLeft){
            SmothHorizontalScrolling(sliderRef.current, 150, 
                moviesRef.current.clientWidth * 2,
                sliderRef.current.scrollLeft)
        }        
    }

    const handleScrollLeft = () =>{

        if(sliderRef.current.scrollLeft > 0){
            SmothHorizontalScrolling(sliderRef.current, 150, 
                -moviesRef.current.clientWidth *2,
                sliderRef.current.scrollLeft)
        }        
    }

    useEffect(()=>{
        if(isDrag){
            if(dragMove < dragDown) handleScrollRight();
            if(dragMove > dragDown) handleScrollLeft();
        }
    },[dragDown,dragMove,isDrag])

    const onDragStart = e =>{
        setDrag(true);
        setDragDown(e.screenX)
    }

    const onDragEnd = e =>{
        setDrag(false);
        
    }

    const onDragEnter = e =>{
        setDragMove(e.screenX);
    }


    return (
        <div className='Moviestrending-Container' id={isSection} >
            <div className='heading-title'>
                <h1 className='heading'>
                    <BiCameraMovie className='IconCameraMovie'/>
                    {title}</h1>
                    <p>Xem tất cả <ImFilm className='iconfim'/></p> 
            </div>       
              
                <div className='Moviestrending-content'>
                    {
                       movies && movies.length > 0 && movies.map((movie, index) => {
    
                           if(movie.poster_path && movie.backdrop_path!== null){
                            let imageUrl = isNetflix
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                            return(
                                <div key ={index}
                                 className ="movieItem-trending"
                                 ref={moviesRef}
                                 onClick={() => handleSetMovie(movie)}
                                 >
                                    <div className='movieItem-Sub'>Viet-Engsub</div>
                                    <img  src={imageUrl} alt=""/>
                                    <div className='fadeBotton'></div>

                                    <div className='movieItem-content'>
                                    <div className='tray-item-quality'>FHD</div>
                                    <div className='movieName'>{movie.title || movie.name}</div>
                                    <div className='rating-popularrity'>
                                        <div className="rating">Rating:  {movie && (movie.vote_average).toFixed(1) }/10</div>
                                        <div className="popularrity">{movie && movie.popularity } </div>
                                    </div>
                                    </div>
                                </div>
                            )
                           }
                       }
                     )
                    } 
                </div>          
        </div>
    );
}

export default Moviestrending;


const  MoviesSlider = styled.div`

`;
