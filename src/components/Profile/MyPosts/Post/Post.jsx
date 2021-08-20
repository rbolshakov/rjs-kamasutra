import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://yt3.ggpht.com/a/AGF-l782QabrAOJQCWxyHE5rLIYz_X7NbAmtEjEkUA=s900-c-k-c0xffffffff-no-rj-mo"
        alt="userAvatar"
      />
      {props.message}
      <div>
        <span>{props.likeCount}Like</span>
      </div>
    </div>
  );
};

export default Post;
