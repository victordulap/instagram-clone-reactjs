import React, { useState, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { feedPosts } from './data/feedPosts';
import { links } from './data/links';

const AppContext = React.createContext();

const initialState = {
  feedPosts,
  links,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleLikeOnPost = (id) => {
    dispatch({ type: 'TOGGLE_LIKE_ON_POST', payload: id });
  };
  const toggleSaveOnPost = (id) => {
    dispatch({ type: 'TOGGLE_SAVE_ON_POST', payload: id });
  };

  const getPostById = (id) => {
    dispatch({ type: 'GET_POST_BY_ID', payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleLikeOnPost,
        toggleSaveOnPost,
        getPostById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
