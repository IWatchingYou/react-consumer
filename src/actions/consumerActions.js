import {
  FETCH_CONSUMER,
  FETCT_NEW_CONSUMER,
  FETCH_DELETE_CONSUMER,
  FETCH_UPDATE_CONSUMER,
  FETCH_CONSUMER_ID,
  FETCH_COUNT,
  FETCH_SEARCH
} from './types';

const consumerURI = 'http://192.168.111.143:9999/api/';

export const fetchConsumers = (page) => dispatch => {
  fetch(`${consumerURI}consumers/${page}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(consumer => {dispatch({
      type: FETCH_CONSUMER,
      payload: consumer
    })
  });
}

export const fetchConsumersById = (id) => dispatch => {
  fetch(`${consumerURI}consumer/${id}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(consumer => {dispatch({
      type: FETCH_CONSUMER_ID,
      payload: consumer
    })
  });
}

export const fetchNewConstumers = (postData) => dispatch =>{
  fetch(`${consumerURI}consumer`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(consumer => {dispatch({
      type: FETCT_NEW_CONSUMER,
      payload: consumer
    })
  });
}

export const fetchDeleteConsumer = (id) => dispatch =>{
  console.log(id);
  fetch(`${consumerURI}consumer/${id}`, {
    method: 'DELETE',
  })
  .then(() => dispatch({
    type: FETCH_DELETE_CONSUMER,
    payload: 'success'
  }));
}

export const fetchUpdateConsumer = (id, postData) => dispatch =>{
  fetch(`${consumerURI}consumer/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(consumer => dispatch({
    type: FETCH_UPDATE_CONSUMER,
    payload: consumer
  }));
}

export const fetchCount = () => dispatch =>{
  fetch(`${consumerURI}consumerCount`, {
    method: 'GET'
  })
  .then(res => res.json())
  .then(count => dispatch({
    type: FETCH_COUNT,
    payload: count
  }));
}

export const fetchsearch = (query) => dispatch =>{
  fetch(`${consumerURI}consumerfind?name=${query}`)
  .then(res => res.json())
  .then(consumer => dispatch({
    type: FETCH_SEARCH,
    payload: consumer
  }))
}