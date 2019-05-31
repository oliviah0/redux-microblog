import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";
import uuid from 'uuid/v4';

const INITIAL_STATE = {
  posts: {
    1: {
      title: "The Good Song",
      description: "A really good song",
      body: "Songs about life that make you appreciate the good things.",
      comments: [{ id: 3, text: 'example2' }, { id: 4, text: 'example2' }]

    },
    2: {
      title: "The Shoe",
      description: "A story about shoes that Haley likes",
      body: "There was this pair of shoes that Haley had to have. They had hints of pink and purple on the sole. She needs them...",
      comments: [{ id: 1, text: 'great' }, { id: 2, text: 'great2' }]
    }
  },

};

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  let posts = { ...state.posts };
  let newComments;
  let newComment;
  let tempId;

  // TODO - figure out something for id later...
  switch (action.type) {
  case ADD_POST:
    tempId = uuid();
    posts[tempId] = action.payload;
    return { ...state, posts };

  case REMOVE_POST:
    delete posts[action.payload];
    return { ...state, posts };

    //TODO - do not feel like doing.
  case EDIT_POST:
    return {
      ...state,
      posts: {
        ...posts, [action.payload.id]: {
          ...posts[action.payload.id], 
          title: action.payload.content.title, 
          description: action.payload.content.description,
          body: action.payload.content.body
        }
      }
    };

  case ADD_COMMENT:
    tempId = uuid();
    newComment = { ...action.payload.text, id: tempId };

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
    newComments = posts[action.payload.postId].comments.filter(comment => comment.id !== action.payload.commentId);

    return {
      ...state,
      posts: {
        ...posts, [action.payload.postId]: {
          ...posts[action.payload.postId], comments: newComments
        }
      }
    };


  default:
    return state;
  }
}
// end

export default rootReducer;