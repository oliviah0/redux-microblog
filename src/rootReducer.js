import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";
import uuid from 'uuid/v4'

const INITIAL_STATE = {
  posts: {
    1: {
      title: "The Good Song",
      description: "A really good song",
      body: "Songs about life that make you appreciate the good things."
    },
    2: {
      title: "The Shoe",
      description: "A story about shoes that Haley likes",
      body: "There was this pair of shoes that Haley had to have. They had hints of pink and purple on the sole. She needs them..."
    }
  },
  comments: {
    1: {
      post_id: '1',
      text: 'great'
    },
    2: {
      post_id: '2',
      text: 'great'
    },
    3: {
      post_id: '2',
      text: 'Olivia'
    },
    4: {
      post_id: '1',
      text: 'ROCKS'
    }
  }
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  let posts = { ...state.posts }
  let comments = { ...state.comments }

  switch (action.type) {
    case ADD_POST:
      let id = uuid()
      posts[id] = action.payload
      return { ...state, posts };

    case REMOVE_POST:
      console.log("REMOVED")
      delete posts[action.payload]
      return {...state, posts}

    case EDIT_POST:
      console.log("EDIT")
      return state

    case ADD_COMMENT:
      console.log("COMMENT")
      let commentId = uuid()
      comments[commentId] = action.payload
      return {...state, comments }
    
      case REMOVE_COMMENT:
      console.log("REMOVE COMMENT");
      delete comments[action.payload]
      return {...state, comments}

    default:
      return state;
  }
}
// end

export default rootReducer;
