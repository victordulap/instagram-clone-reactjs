import React from 'react';
import './style.css';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { RiMessage2Line, RiSaveLine, RiSaveFill } from 'react-icons/ri';
import { BiPaperPlane } from 'react-icons/bi';
import { useGlobalContext } from '../../../../context';
import { Link } from 'react-router-dom';

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
          alt="couldn't load"
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
          <Link to={`/post/${id}`} className="card-comments-nr">
            <strong>Comments ({comments.length})</strong>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
