import './Menus.scss';
import {FaHome, FaHotjar, FaStar } from 'react-icons/fa';
import {MdTheaterComedy } from 'react-icons/md';
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll
 } from 'react-icons/gi';
import MenuItem from './MenuItem';


function Menus() {
    return ( 
        <div className='MenusPane'>
            <MenuItem name='Home' Icon={FaHome} to='netflix'/>
            <MenuItem name='Trending' Icon={FaHotjar} to='trending'/>
            <MenuItem name='Top rated' Icon={FaStar} to='toprated'/>
            <MenuItem name='Actions Movies' Icon={GiNinjaHeroicStance}/>
            <MenuItem name='Comedy Movies' Icon={MdTheaterComedy}/>
            <MenuItem name='Horror Movies' Icon={GiGhost}/>
            <MenuItem name='Romance Movies' Icon={GiRomanToga}/>
            <MenuItem name='Documentaries ' Icon={GiBandageRoll}/>
        </div> 
     );
}

export default Menus;
