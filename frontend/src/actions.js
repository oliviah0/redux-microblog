import { ADD_POST, REMOVE_POST, EDIT_POST, ADD_COMMENT, REMOVE_COMMENT, LOAD_POSTS, LOAD_TITLES } from "./actionTypes";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/posts";


export function getTitlesFromAPI() {
  return async function(dispatch) {

    // asynchronously get posts from backend
    let res = await axios.get(`${BASE_URL}`);

    // asynchronously call backend for each post w/comments
    let promises = res.data.map(title => {
      return axios.get(`${BASE_URL}/${title.id}`);
    });

    //await untill all API requests return
    let posts = await Promise.all(promises);

    // convert posts array into a object with id as the key
    let postObj = {};
    for (let item of posts) {
      postObj[item.data.id] = item.data;
    }

    dispatch(gotPosts(postObj));
    dispatch(gotTitles(res.data));

  };
}


export function removePostFromAPI(id) {
  return async function(dispatch) {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch(removePost(id));

  };
}

export function addPostToAPI(data) {
  return async function(dispatch) {
    let res = await axios.post(`${BASE_URL}`, data);

    console.log("NEW POST", res.data);
    dispatch(addPost(res.data));
  };
}

function gotTitles(posts) {
  return { 
    type: LOAD_TITLES, 
    payload: posts
  };
}

function gotPosts(posts) {
  return { 
    type: LOAD_POSTS, 
    payload: posts
  };
}


export function addPost(data) {
  return {
    type: ADD_POST,
    payload: data
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
