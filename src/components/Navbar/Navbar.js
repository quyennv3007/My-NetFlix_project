import NetflixIcon from '../../assets/images/Netflix-Logo.png';
import { MdSearch } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';
import './Navbar.scss'
import { useStrollY } from '../hooks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MenuRiponsiver from '../Menus/MenuRiponsiver';
import { MdClose } from 'react-icons/md'


function Navbar(props) {

    const [scrollY] = useStrollY()
    const [keywordsValue, setKeywords] = useState('');
    const [isHideMenu, setHideMenu] = useState(true);
    const navigate = useNavigate();

    const handleClickUser = ()=>{
        setHideMenu(!isHideMenu)
    };

    const handleClickImage = ()=>{
        setHideMenu(false)
    }


    const ListCategory = [
        'Hành Động', 'Phiêu Lưu', 'Kinh Dị',
        'Tình cảm', 'Hoạt Hình', 'Viễn Tưởng', 'Võ Thuật', 'Hài Hước', 'Tâm Lý',
        'Viễn Tưởng', 'Thần Thoại', 'Chiến Tranh', 'Cổ Trang', 'Hình Sự', 'Bí Ẩn', 'Học Dường'
    ];
    const listNation = [
        'Trung Quốc', 'Mỹ', 'Hàn Quốc', 'Nhật Bản', 'Việt Nam', 'Pháp', 'Đức', 'Úc', 'Khác',
    ];

    const phimle = [
        'Mới Nhất ', 'Phim 2022', 'Phim 2021', 'Phim 2020', 'Phim 2019', 'Phim 2018', 'Phim 2017', 'Phim 2016', 'Khác',
    ];

    const handleChangeInput = (e) => {
        let keywords = e.target.value;

        setKeywords(keywords);

        setTimeout(() => {
            (keywords.length > 0)
                ? navigate(`/search?keywords=${keywords.trim()}`)
                : navigate('/')
        }, 1000)
    }

    const goHome = () => {
        navigate('/')
        setKeywords('');
    };
 


    return (
        <div className='Navigation' style={scrollY < 50 ? { backgroundColor: 'transparent' } : { backgroundColor: 'rgb(51,51,51)' }}>
            <div className='navContainer'>
                <div className='logo'
                    onClick={goHome}
                >
                    <img src={NetflixIcon} alt="icon" />
                </div>
                <TiThMenu className='iconMenu' />
                <div className='Navbar'>

                    <Tippy
                        interactive
                        delay={100}                       
                        content={
                            <div className='MenuCategory'>
                                {ListCategory.map((list, index) => (
                                    <ul key={index}>
                                        <li >{list}</li>
                                    </ul>
                                ))}
                            </div>
                        }
                    >
                        <div className='NavLink'>THỂ LOẠI</div>
                    </Tippy>
                    <Tippy
                        interactive
                        delay={100}
                        content={
                            <div className='MenuCategory'>
                                {listNation.map((list, index2) => (
                                    <ul key={index2}>
                                        <li>{list}</li>
                                    </ul>
                                ))}
                            </div>
                        }
                    >
                        <div className='NavLink'>QUỐC GIA</div>
                    </Tippy>
                    <Tippy
                        interactive
                        delay={100}
                        content={
                            <div className='MenuCategory'>
                                {phimle.map((list, index3) => (
                                    <ul key={index3}>
                                        <li >{list}</li>
                                    </ul>
                                ))}
                            </div>
                        }
                    >
                        <div className='NavLink'>PHIM LẺ</div>
                    </Tippy>

                    <div className='NavLink'>PHIM BỘ</div>
                    <div className='NavLink'>CHIẾU RẠP</div>
                    <div className='NavLink'>SẮP CHIẾU</div>
                </div>


                <div className='navSearch'>
                    <MdSearch className='iconSearch' />
                    <input
                        type="text" placeholder='Tìm kiếm  '
                        onChange={handleChangeInput}
                        value={keywordsValue}
                    />
                    <div className='MenuSearch '>
                        <span> Nhập tên phim để tìm kiếm </span>
                    </div>

                    {/* 
                        {keywords && (
                           <div className='MenuSearch '>
                           <span> 1 </span>
                       </div>
                        )} */}

                </div>

                <div className='Navbar-header-user'>
                    <div className='link-fb' >
                        <a href='https://www.facebook.com/profile.php?id=100010762814863'><img className='img-facebook' src='https://seolenart.com/wp-content/uploads/2017/11/icon-fb.png' alt='link fb' /></a>
                        <img className='img-user' onClick={handleClickImage} src='https://cdn3.iconfinder.com/data/icons/gradient-circle/36/1014-512.png' alt='user' />
                    </div>
                </div>
            </div>

            <div className={ isHideMenu &&  'hideMenu' || "Menu-user "}>
                <MdClose onClick={handleClickUser} className="icon-close" />
                <MenuRiponsiver ></MenuRiponsiver></div>
            </div>
    );
}

export default Navbar;

