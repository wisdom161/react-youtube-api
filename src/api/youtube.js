import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyD3Zk3CtIMj4B5kkVdtBhDf4O9i_lFovjU'
  }
})