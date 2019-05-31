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

export function editPost(id, content) {
  return {
    type: EDIT_POST,
    payload: {id, content}
  };
}

export function addComment(text, postId) {
  return {
    type: ADD_COMMENT,
    payload: { text, postId }
  };
}

export function removeComment(commentId, postId) {
  return {
    type: REMOVE_COMMENT,
    payload: { commentId, postId }
  };
}
