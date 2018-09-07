import axios from 'axios';
import { API_BASE } from '../config/env'


export const FETCH_AUTHORIZATIONS_PENDING = 'FETCH_AUTHORIZATIONS_PENDING';
export const FETCH_AUTHORIZATIONS_FULFILLED = 'FETCH_AUTHORIZATIONS_FULFILLED';
export const FETCH_AUTHORIZATIONS_REJECTED = 'FETCH_AUTHORIZATIONS_REJECTED';

export const NEW_AUTHORIZATIONS_PENDING = 'NEW_AUTHORIZATIONS_PENDING';
export const NEW_AUTHORIZATIONS_FULFILLED = 'NEW_AUTHORIZATIONS_FULFILLED';
export const NEW_AUTHORIZATIONS_REJECTED = 'NEW_AUTHORIZATIONS_REJECTED';

export const SINGLE_FETCH_AUTHORIZATIONS_PENDING = 'SINGLE_FETCH_AUTHORIZATIONS_PENDING';
export const SINGLE_FETCH_AUTHORIZATIONS_FULFILLED = 'SINGLE_FETCH_AUTHORIZATIONS_FULFILLED';
export const SINGLE_FETCH_AUTHORIZATIONS_REJECTED = 'SINGLE_FETCH_AUTHORIZATIONS_REJECTED';

export const UPDATE_AUTHORIZATIONS_PENDING = 'UPDATE_AUTHORIZATIONS_PENDING';
export const UPDATE_AUTHORIZATIONS_FULFILLED = 'UPDATE_AUTHORIZATIONS_FULFILLED';
export const UPDATE_AUTHORIZATIONS_REJECTED = 'UPDATE_AUTHORIZATIONS_REJECTED';

export const DELETE_AUTHORIZATIONS_PENDING = 'DELETE_AUTHORIZATIONS_PENDING';
export const DELETE_AUTHORIZATIONS_FULFILLED = 'DELETE_AUTHORIZATIONS_FULFILLED';
export const DELETE_AUTHORIZATIONS_REJECTED = 'DELETE_AUTHORIZATIONS_REJECTED';


export function fetchAuthorizations(){
  return dispatch => {
    dispatch({
      type: "FETCH_AUTHORIZATIONS",
      payload: axios.get(`${API_BASE}/authorizations`)
      .then(result => result.data)
    })   
  } 
} 

export function onNewAuthorizationsSubmit({authorizationsName}){
  return dispatch => {
    dispatch({
      type: "NEW_AUTHORIZATIONS",
      payload: axios.post(`${API_BASE}/authorizations/new`,{
        authorizationsName,
      })
      .then(result => result.data)
    })   
  } 
} 

export function onUpdateAuthorizationsSubmit({authorizationsName,authorizationsId}){
  return dispatch => {
    dispatch({
      type: "UPDATE_AUTHORIZATIONS",
      payload: axios.post(`${API_BASE}/authorizations/update`,{
        authorizationsName,
        authorizationsId
      })
      .then(result => result.data) 
    })   
  } 
} 

export function onDeleteAuthorizationsSubmit(authorizationsId){
  console.log(authorizationsId)
  return dispatch => {
    dispatch({
      type: "DELETE_AUTHORIZATIONS",
      payload: axios.post(`${API_BASE}/authorizations/delete`,{
        authorizationsId : authorizationsId
      })
      .then(result => result.data) 
    })   
  } 
} 

export function singleFetchAuthorizations(authorizationsId){
  return dispatch => {
    dispatch({
      type: "SINGLE_FETCH_AUTHORIZATIONS",
      payload: axios.get(`${API_BASE}/authorizations/${authorizationsId}`)
      .then(result => result.data)
    })   
  } 
} 

