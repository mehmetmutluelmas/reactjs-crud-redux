import axios from 'axios';
import { API_BASE } from '../config/env'


export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING';
export const FETCH_USERS_FULFILLED = 'FETCH_USERS_FULFILLED';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';

export const NEW_USERS_PENDING = 'NEW_USERS_PENDING';
export const NEW_USERS_FULFILLED = 'NEW_USERS_FULFILLED';
export const NEW_USERS_REJECTED = 'NEW_USERS_REJECTED';

export const SINGLE_FETCH_USERS_PENDING = 'SINGLE_FETCH_USERS_PENDING';
export const SINGLE_FETCH_USERS_FULFILLED = 'SINGLE_FETCH_USERS_FULFILLED';
export const SINGLE_FETCH_USERS_REJECTED = 'SINGLE_FETCH_USERS_REJECTED';

export const UPDATE_USERS_PENDING = 'UPDATE_USERS_PENDING';
export const UPDATE_USERS_FULFILLED = 'UPDATE_USERS_FULFILLED';
export const UPDATE_USERS_REJECTED = 'UPDATE_USERS_REJECTED';

export const DELETE_USERS_PENDING = 'DELETE_USERS_PENDING';
export const DELETE_USERS_FULFILLED = 'DELETE_USERS_FULFILLED';
export const DELETE_USERS_REJECTED = 'DELETE_USERS_REJECTED';


export function fetchUsers(){
  return dispatch => {
    dispatch({
      type: "FETCH_USERS",
      payload: axios.get(`${API_BASE}/users`)
      .then(result => result.data)
    })   
  } 
} 

export function onNewUsersSubmit({usersFirstName,usersLastName,usersEmail,authorizationsId}){
  return dispatch => {
    dispatch({
      type: "NEW_USERS",
      payload: axios.post(`${API_BASE}/users/new`,{
        usersFirstName,
        usersLastName,
        usersEmail,
        authorizationsId
      })
      .then(result => result.data)
    })   
  } 
} 

export function onUpdateUsersSubmit({usersFirstName,usersLastName,usersEmail,usersId,authorizationsId}){
  return dispatch => {
    dispatch({
      type: "UPDATE_USERS",
      payload: axios.post(`${API_BASE}/users/update`,{
        usersFirstName,
        usersLastName,
        usersEmail,
        usersId,
        authorizationsId
      })
      .then(result => result.data) 
    })   
  } 
} 

export function onDeleteUsersSubmit(usersId){
  console.log(usersId)
  return dispatch => {
    dispatch({
      type: "DELETE_USERS",
      payload: axios.post(`${API_BASE}/users/delete`,{
        usersId : usersId
      })
      .then(result => result.data) 
    })   
  } 
} 

export function singleFetchUsers(usersId){
  return dispatch => {
    dispatch({
      type: "SINGLE_FETCH_USERS",
      payload: axios.get(`${API_BASE}/users/${usersId}`)
      .then(result => result.data)
    })   
  } 
} 


/*
export function fetchUsers(){
  return dispatch => { 
      axios.get(`${API_BASE}/users`)
        .then(result => result.data)
        .then(data => dispatch({
          type: FETCH_USERS,
          payload: data.users
        }))
        .catch(error => dispatch({
          type: FETCH_USERS_ERROR,
          payload: error
        }))

  }
} 
*/