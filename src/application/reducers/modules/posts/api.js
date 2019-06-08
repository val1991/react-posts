import { Api } from '../../../../helpers/ApiClient.js';

export class Posts {
    static async getAllPosts() {
        try {
            const response = await Api.client.get('/posts');
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            console.error('error getAllPosts', e.response);
            if (!!e.response) {
                return {
                    status: e.response.status,
                    data: e.response.data,
                };
            } else {
                return {
                    status: 'error',
                    data: 'Server errors',
                };
            } 

        }
    }

    static async getPostById(postId) {
        try {
            const response = await Api.client.get(`/posts/${postId}?_embed=comments`);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            console.error('error getPostById', e.response);
            if (!!e.response) {
                return {
                    status: e.response.status,
                    data: e.response.data,
                };
            } else {
                return {
                    status: 'error',
                    data: 'Server errors',
                };
            } 

        }
    }
    
    static async addComment(postId, body) {
        try {
            const data = {
                postId,
                body,
            }
            const response = await Api.client.post('/comments', data);
            return {
                status: response.status,
                data: response.data,
            };
        } catch (e) {
            console.error('error addComment', e.response);
            if (!!e.response) {
                return {
                    status: e.response.status,
                    data: e.response.data,
                };
            } else {
                return {
                    status: 'error',
                    data: 'Server errors',
                };
            } 

        }
    }
}