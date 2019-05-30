import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: "The Good Song",
      description: "A really good song",
      body: "Songs about life that make you appreciate the good things."
    },
    {
      id: 2,
      title: "The Shoe",
      description: "A story about shoes that Haley likes",
      body: "There was this pair of shoes that Haley had to have. They had hints of pink and purple on the sole. She needs them..."
    }
  ], 
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
  case ADD_POST:
    console.log("ADDED")
    return { ...state, posts: [...state.posts, action.payload] };

  case REMOVE_POST:
      console.log("REMOVED")
      return state

  case EDIT_POST:
      console.log("EDIT")
      return state

  default:
    return state;
  }
}
// end

export default rootReducer;
