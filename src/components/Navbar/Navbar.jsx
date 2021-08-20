import React from "react";
import s from "./Navbar.module.css";

const Profile = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href=".#">My Profile</a>
      </div>
      <div className={s.item}>
        <a href=".#">Message</a>
      </div>
      <div className={s.item}>
        <a href=".#">News</a>
      </div>
      <div className={s.item}>
        <a href=".#">Music</a>
      </div>
      <div className={s.item}>
        <a href=".#">Settings</a>
      </div>
    </nav>
  );
};

export default Profile;
