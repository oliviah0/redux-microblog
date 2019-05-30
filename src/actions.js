import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT } from "./actionTypes";

export function addPost(payload) {
  return {
    type: ADD_POST,
    payload

  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id
  };
}

export function editPost(id) {
  return {
    type: EDIT_POST,
    payload: id
  };
}

export function addComment(payload) {
  return {
    type: ADD_COMMENT,
    payload 
  };
}

export function removeComment(commentId) {
  return {
    type: REMOVE_COMMENT,
    payload: commentId
  };
}
