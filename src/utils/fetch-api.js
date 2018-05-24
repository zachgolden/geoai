/*
Zach Golden
testing for api calls routing with axios, can be tested easily with Postman.
*/
import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getPublicData, getRestrictedData, getImage};

function getPublicData() {
  const url = '${BASE_URL}/api/fileTest/general';
  return axios.get(url).then(response => response.data);
}

function getRestrictedData() {
  const url = '${BASE_URL}/api/fileTest/restricted';
  return axios.get(url).then(response => response.data);
}

//unused now
function getImage() {
  const url = '${BASE_URL}/image/:filename';
  return axios.get(url).then(response => response.data);
}

//unused now
function putImage() {
  const url = '${BASE_URL}/upload';
  return axios.post(url).then(response => response.data);
}
