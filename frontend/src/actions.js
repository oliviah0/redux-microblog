import { 
  ADD_POST, 
  REMOVE_POST, 
  EDIT_POST, 
  ADD_COMMENT, 
  REMOVE_COMMENT, 
  LOAD_POSTS, 
  LOAD_TITLES, 
  SHOW_SPINNER
} from "./actionTypes";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/posts";

/************
 * API CREATORS
*************/

export function getTitlesFromAPI() {
  return async function (dispatch) {
    // dispatch(startLoad());
    try{
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
    } catch(err){
      console.log('STOP!')
    }
  };
}

export function addPostToAPI(data) {
  return async function (dispatch) {
    let res = await axios.post(`${BASE_URL}`, data);
    dispatch(addPost(res.data));
  };
}

export function updatePostToAPI(id, data) {
  return async function (dispatch) {
    let res = await axios.put(`${BASE_URL}/${id}`, data);
    dispatch(editPost(id, res.data));
  };
}

export function removePostFromAPI(id) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/${id}`);
    dispatch(removePost(id));
  };
}

export function addCommentToAPI(data, id) {
  return async function (dispatch) {
    let newObj = {
      post_id: id,
      text: data.text
    }

    let res = await axios.post(`${BASE_URL}/${id}/comments`, newObj);
    dispatch(addComment(res.data, id));
  };
}

export function removeCommentFromAPI(comment_id, post_id) {
  return async function (dispatch) {
    await axios.delete(`${BASE_URL}/${post_id}/comments/${comment_id}`);
    dispatch(removeComment(comment_id, post_id));
  };
}

/**************
 * regular action creators
**************/

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

export function editPost(id, content) {
  return {
    type: EDIT_POST,
    payload: { id, content }
  };
}

export function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: id
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

export function startLoad(){
  return { 
    type: SHOW_SPINNER
  };
}