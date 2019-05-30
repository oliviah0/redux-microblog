import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";

const INITIAL_STATE = {
  posts: [], //array of objects
};

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
  case ADD_POST:
    console.log("ADDED")
    return state

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
