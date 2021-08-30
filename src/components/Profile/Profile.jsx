import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://i.ytimg.com/vi/uKntdthpcCY/maxresdefault.jpg"
                    alt="profile_img"
                />
            </div>
            <div>ava + descr</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;
