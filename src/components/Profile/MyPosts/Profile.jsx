import React from 'react';
import s from './Profile.module.css'
import MyPosts from "../MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src='https://i.ytimg.com/vi/0GW95iGjbe8/sddefault.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            <MyPosts/>
        </div>
    </div>
}
export default Profile