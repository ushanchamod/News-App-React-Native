import axios from 'axios'

export default axios.create({
  baseURL: 'https://newsapi.org/v2/'  //everything?q=tesla&from=2022-05-23&sortBy=publishedAt&apiKey=42bfe583a74449ebbcb6f3c2453aec34
})