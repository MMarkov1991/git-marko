import React from 'react';
import s from './Nav.module.css';



const Nav = () =>{
    return <nav className={s.nav}>
        <div className={s.item}>
            <a href="/Profile">Profile</a>
        </div>
        <div className={s.item}>
            <a href="dialogs">Message</a>
        </div>
        <div className={s.activ}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default Nav