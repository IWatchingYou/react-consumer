import {
  FETCH_CONSUMER,
  FETCT_NEW_CONSUMER,
  FETCH_DELETE_CONSUMER,
  FETCH_UPDATE_CONSUMER,
  FETCH_CONSUMER_ID
} from './types';

export const fetchConsumers = () => dispatch => {
  fetch('http://localhost:9999/api/consumer', {
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
  fetch(`http://localhost:9999/api/consumer/${id}`, {
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
  fetch('http://localhost:9999/api/consumer', {
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
  fetch(`http://localhost:9999/api/consumer/${id}`, {
    method: 'DELETE',
  })
  .then(() => dispatch({
    type: FETCH_DELETE_CONSUMER,
    payload: 'success'
  }));
}

export const fetchUpdateConsumer = (id, postData) => dispatch =>{
  fetch(`http://localhost:9999/api/consumer/${id}`, {
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