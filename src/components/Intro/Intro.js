import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc'
import { GrCirclePlay } from 'react-icons/gr'
import { CgPlayPauseO } from 'react-icons/cg'
import './Intro.scss'
import { useState } from 'react';


function Intro(props) {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlay, setIsPlay] = useState(false);

    return (
        <div className='IntroContainer'>
            <ReactPlayer
                playing={isPlay}
                loop={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                url="https://vimeo.com/273686020"
                className="videoIntro"
            />
            <div className='infoIntro'>
                <h1 className='headingIntro'>NETFLIX The Rain</h1>
                <p className='overviewIntro'>Production: Fox Devil Films GmbH for Netflix Amsterdam
                    Director: Simon Ritzler
                    Dop: Carlo Jelavic
                    Editor: Michael Timmers
                    Colorist: Mike Bothe
                    Compositing: Stathis Nafpliotis</p> 
            </div>
            {
                    isPlay ? (
                        <button className="MenuPlay"
                            onClick={() => setIsPlay(prev => !prev)}>Stop
                            <CgPlayPauseO className='playIcon' />
                        </button>

                    ) : (
                        <button className="MenuPlay"
                            onClick={() => setIsPlay(prev => !prev)}>Play
                            <GrCirclePlay className='playIcon' />
                        </button>
                    )
                }


            {
                isMuted ? (
                    <VscMute className='btnVolume'
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                ) : (
                    <VscUnmute className='btnVolume'
                        onClick={() => setIsMuted(prev => !prev)}
                    />
                )
            }
            <div className='fadeBotton'></div>
        </div>
    );
}

export default Intro;