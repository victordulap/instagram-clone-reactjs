import React from 'react';
import { useGlobalContext } from '../../../context';
import Post from './Post';
const Index = () => {
  const { feedPosts } = useGlobalContext();
  return (
    <div className="feed-posts w-100 d-flex justify-content-center flex-column">
      {feedPosts.map((feedPost) => {
        return <Post key={feedPost.id} {...feedPost} />;
      })}
    </div>
  );
};

export default Index;
