import React, { useEffect, useRef, useState } from "react";
import './MenuRiponsiver.scss'
import { BsBoxArrowUpLeft } from 'react-icons/bs'
import { MdClose, MdLogout } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
import { ImFilm } from 'react-icons/im'
import { FaHeart, FaBell } from 'react-icons/fa'

function MenuRiponsiver() {

    const [isHideBorder, setHideBorder] = useState(true)

    return (
        <div className="WapperMenu">            
            <div className="MenuContainer ">
                <div className="TitleHeader">
                    <MdClose className="icon-close"/>
                    <span className="nameUser">Chào: Nguyễn Văn Quyên</span>
                    <img className='img-user-menu' src='https://cdn3.iconfinder.com/data/icons/gradient-circle/36/1014-512.png' alt='user' />
                    <div className="Menu-title">
                        <span onClick={() => setHideBorder(true)}  className="information">THÔNG TIN</span>
                        <span onClick={() => setHideBorder(false)} className="Notification">THÔNG BÁO</span>
                    </div>
                </div>

                {isHideBorder ?                    
                    <div className="MenuBody">
                        <div className="border-bottom-left"></div>                      
                        <div className="Menu-Body-title">
                            <div className="Menu-information">
                                <div className="Menu-content">
                                    <BsBoxArrowUpLeft className="icon-body" />
                                    <span>Sửa thông tin</span>
                                </div>
                                <div className="Menu-content">
                                    <RiLockPasswordFill className="icon-body" />
                                    <span>Đổi mật khẩu</span>
                                </div>
                            </div>

                            <div className="Menu-information">
                                <div className="Menu-content">
                                    <ImFilm className="icon-body" />
                                    <span>Phim đã xem</span>
                                </div>
                                <div className="Menu-content">
                                    <FaHeart className="icon-body" />
                                    <span>Phim đã thích</span>
                                </div>
                                <div className="Menu-content">
                                    <FaBell className="icon-body" />
                                    <span>Phim đang theo dõi</span>
                                </div>
                            </div>

                            <div className="logout-user">
                                <MdLogout className="icon-logout" />
                                <span>Đăng xuất</span>
                            </div>
                        </div>
                    </div> :
                    <div className="MenuBody">
                        <div className="border-bottom-right"></div>  
                        <div className="Notification-body">
                            <img className="Notification-img" src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/1014-512.png" alt="thông báo" />
                            <div className="Notification-content">
                                <div>Chào mừng bạn tham gia website, hãy cùng trải nghiệm với các tính năng</div>
                                <p className="Notification-time">2 tuần trước</p>
                            </div>
                        </div>
                        <div className="Notification-body">
                            <img className="Notification-img" src="https://cdn3.iconfinder.com/data/icons/gradient-circle/36/1014-512.png" alt="thông báo" />
                            <div className="Notification-content">
                                <div>Chào mừng bạn tham gia website, hãy cùng trải nghiệm với các tính năng</div>
                                <p className="Notification-time">2 tuần trước</p>
                            </div>
                        </div>
                    </div>
                }



            </div>
        </div>
    );
}

export default MenuRiponsiver;