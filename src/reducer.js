const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_LIKE_ON_POST':
      const updatedFeedPosts = state.feedPosts.map((feedPost) => {
        if (feedPost.id === action.payload) {
          const increaseLikeNr = !feedPost.liked;
          const changedLikeNr = increaseLikeNr
            ? feedPost.nrOfLikes + 1
            : feedPost.nrOfLikes - 1;
          return {
            ...feedPost,
            liked: !feedPost.liked,
            nrOfLikes: changedLikeNr,
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
    case 'GET_POST_BY_ID':
      const postById = state.feedPosts.find(
        (post) => post.id === parseInt(action.payload)
      );
      return { ...state, postById };

    default:
      throw new Error('No matching action found');
  }
};

export default reducer;
