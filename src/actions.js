import { ADD_POST, REMOVE_POST, EDIT_POST } from "./actionTypes";

export function addPost(payload) {
  return {
    type: ADD_POST,
    payload

  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: {id}
  };
}

export function editPost(id) {
  return {
    type: EDIT_POST,
    payload: {id}
  };
}
