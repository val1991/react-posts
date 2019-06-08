import axios from 'axios';

export class Api {
  static client = null;

  static init() {
    if (!Api.client) {
      Api.client = axios.create({
        baseURL: 'https://simple-blog-api.crew.red',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });

    }
  }
}
