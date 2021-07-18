const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE_ON_POST':
      const updatedFeedPosts = state.feedPosts.map((feedPost) => {
        if (feedPost.id === action.payload) {
          return {
            ...feedPost,
            liked: !feedPost.liked,
          };
        }
        return feedPost;
      });
      return { ...state, feedPosts: updatedFeedPosts };
    case 'TOGGLE_SAVE_ON_POST':
      const updatedFeedPosts2 = state.feedPosts.map((feedPost) => {
        if (feedPost.id === action.payload) {
          return {
            ...feedPost,
            saved: !feedPost.saved,
          };
        }
        return feedPost;
      });
      return { ...state, feedPosts: updatedFeedPosts2 };

    default:
      throw new Error('No matching action found');
  }
};

export default reducer;
