import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
        <div className={s.posts}>
          <Post message="Hi, how are you?" likeCount="15" />
          <Post message="it's my first post" likeCount="20" />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
