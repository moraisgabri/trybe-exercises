const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(object => console.log(object))
}

fetchJoke()