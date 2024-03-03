import axios from 'axios'
import HttpClient from './HttpClient';

export default class AxiosHttpClient implements HttpClient {
  async get(url: string) {
    const { data } = await axios.get(url)

    return data
  }
}