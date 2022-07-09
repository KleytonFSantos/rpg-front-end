import axios, { AxiosInstance, AxiosResponse } from 'axios';

export type Session = {
    token?: string;
    username: string;
    password: string;
}

export const api: AxiosInstance = axios.create({
    baseURL: 'http://api.cl.com',
});

export const createSession = async ({ username, password }: Session): Promise<AxiosResponse<Session>> => {
    return api.post('/auth', {
        username,
        password,
    });
};