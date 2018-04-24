import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

export {getPublicData, getRestrictedData};

function getPublicData() {
  const url = '${BASE_URL}/api/fileTest/general';
  return axios.get(url).then(response => response.data);
}

function getRestrictedData() {
  const url = '${BASE_URL}/api/fileTest/restricted';
  return axios.get(url).then(response => response.data);
}
