import React, { useEffect, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { RiMessage2Line, RiSaveFill, RiSaveLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './style.css';

const Index = () => {
  const { id } = useParams();
  const {
    feedPosts,
    getPostById,
    postById,
    toggleLikeOnPost,
    toggleSaveOnPost,
  } = useGlobalContext();

  useEffect(() => {
    getPostById(id);
    console.log(postById);
  }, []);

  if (id === null) {
    return (
      <div>
        <h1>no post page</h1>
      </div>
    );
  }

  if (postById != null) {
    const {
      id,
      user,
      userImg,
      postImg,
      caption,
      nrOfLikes,
      liked,
      saved,
      comments,
    } = postById;

    return (
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="post">
          <div className="row h-100 px-0">
            <div className="col-lg-6  col-md-13 post-image-container">
              <img className="post-image" src={postImg} alt="img" />
            </div>
            <div className="col-lg-6 col-md-13 post-body">
              <header className="post-body-header">
                <img src={userImg} alt="pfp" className="post-user-pfp" />
                <span className="post-user-name">{user}</span>
              </header>
              <section className="post-body-content"></section>
              <footer className="post-body-footer">
                <div className="post-interactions">
                  <button
                    className="post-interaction"
                    onClick={() => toggleLikeOnPost(id)}
                  >
                    {liked ? <AiFillHeart /> : <AiOutlineHeart />}
                  </button>
                  <button className="post-interaction">
                    <RiMessage2Line />
                  </button>
                  <button className="post-interaction">
                    <BiPaperPlane />
                  </button>
                  <button
                    className="post-interaction ms-auto"
                    onClick={() => toggleSaveOnPost(id)}
                  >
                    {saved ? <RiSaveFill /> : <RiSaveLine />}
                  </button>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>post not found page</h1>
    </div>
  );
};

export default Index;
