import { 
  ADD_POST, 
  REMOVE_POST, 
  EDIT_POST, 
  ADD_COMMENT, 
  REMOVE_COMMENT, 
  LOAD_POSTS, 
  LOAD_TITLES, 
  // SHOW_SPINNER 
} from "./actionTypes";

const INITIAL_STATE = {
  posts: {},
  titles: [], 
  // loading: false
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  let posts = { ...state.posts };
  let titles = [ ...state.titles ];
  let newComments;
  let newComment;
  let newTitles;
  let updatedTitles;

  switch (action.type) {
    
  case LOAD_TITLES:
    return { ...state, titles: action.payload};

  case LOAD_POSTS:
    return { ...state, posts: action.payload};
      
  case ADD_POST:

    // adds post to post state object
    posts[action.payload.id] = { ...action.payload, comments: []};

    //adds title to to title state array
    newTitles = [...titles, action.payload];
    return { ...state, posts, titles: newTitles };

  case REMOVE_POST:

    //filters through titles to remove post
    newTitles = titles.filter(title => title.id !== action.payload);
    
    //deletes post from posts state
    delete posts[action.payload];
    return { ...state, posts, titles: newTitles };

  case EDIT_POST:

    //find single post and update title object
    updatedTitles = titles.map(title => {
        if(title.id === action.payload.id){
          return {
            id: action.payload.content.id, 
            title: action.payload.content.title, 
            description: action.payload.content.description}
        } else {
          return title
        }
      });

    return {
      ...state,
      posts: {
        ...posts, [action.payload.id]: {
          ...posts[action.payload.id], 
          title: action.payload.content.title, 
          description: action.payload.content.description,
          body: action.payload.content.body
        }
      }, 
      titles: updatedTitles
    };

  case ADD_COMMENT:
    newComment = { ...action.payload.text };

    return {
      ...state,
      posts: {
        ...posts, [action.payload.postId]: {
          ...posts[action.payload.postId], comments: [
            ...posts[action.payload.postId].comments, newComment]
        }
      }
    };

  case REMOVE_COMMENT:

    // filters through posts, removes the comment with matching comment id
    newComments = posts[action.payload.postId].comments.filter(
      comment => comment.id !== action.payload.commentId
    );

    return {
      ...state,
      posts: {
        ...posts, [action.payload.postId]: {
          ...posts[action.payload.postId], comments: newComments
        }
      }
    };

  // case SHOW_SPINNER:
  //   return {
  //     ...state, loading: !state.loading
  //   }

  default:
    return state;
  }
}
// end

export default rootReducer;