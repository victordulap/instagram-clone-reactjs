import React from 'react';
import './style.css';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiMessage2Line, RiSaveLine, RiSaveFill } from 'react-icons/ri';
import { BiPaperPlane } from 'react-icons/bi';
import { useGlobalContext } from '../../../../context';

const Index = ({
  id,
  user,
  userImg,
  postImg,
  caption,
  nrOfLikes,
  liked,
  saved,
  comments,
}) => {
  const { toggleLikeOnPost, toggleSaveOnPost } = useGlobalContext();
  return (
    <div className="w-50 my-3 align-self-center card">
      <div className="card-header">
        <img
          src={userImg}
          className="user-pfp"
          style={{ marginRight: '.4rem' }}
        />
        <span>{user}</span>
      </div>
      <img src={postImg} className="card-img-top" alt="couldn't load" />
      <div className="card-body">
        <div className="card-interactions">
          <button
            className="card-interaction"
            onClick={() => toggleLikeOnPost(id)}
          >
            {liked ? <AiFillHeart /> : <AiOutlineHeart />}
          </button>
          <button className="card-interaction">
            <RiMessage2Line />
          </button>
          <button className="card-interaction">
            <BiPaperPlane />
          </button>
          <button
            className="card-interaction ms-auto"
            onClick={() => toggleSaveOnPost(id)}
          >
            {saved ? <RiSaveFill /> : <RiSaveLine />}
          </button>
        </div>
        <p className="card-text mt-1">
          <strong className="">{nrOfLikes} Likes</strong>
        </p>
        <p className="card-text">
          <strong style={{ marginRight: '.4rem' }}>{user}</strong>
          {caption}
        </p>
        {comments && (
          <a className="card-comments-nr">
            <strong>Comments ({comments.length})</strong>
          </a>
        )}
      </div>
    </div>
  );
};

export default Index;
