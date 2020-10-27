import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://i.ytimg.com/vi/0GW95iGjbe8/sddefault.jpg'/>
            </div>
            <div className={s.dsblock}>
                ava+description
            </div>

        </div>)
}
export default ProfileInfo