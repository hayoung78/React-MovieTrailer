import axios from 'axios';

const TMDBToken = process.env.REACT_APP_TMDB_TOKEN;
const BaseUrl = 'https://api.themoviedb.org/3';

const createTMDBRequest = (url, params) => {
    return axios.get(`${BaseUrl}/${url}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDBToken}`,
        },
        params: {
            language: 'ko-KR',
            region: 'KR',
            ...params,
        },
    });
};

export const movieDetailApi = async movieNumber => {
    const response = await createTMDBRequest(`movie/${movieNumber}`, {});
    return response.data;
};

export const movieListApi = async (name, page) => {
    const response = await createTMDBRequest(name, { page });
    return response.data;
};

export const popularApi = async page => {
    const response = await createTMDBRequest('movie/popular', { page });
    return response.data;
};

export const upcomingApi = async page => {
    const response = await createTMDBRequest('movie/upcoming', { page });
    return response.data;
};

export const movieVideoApi = async movieNumber => {
    const response = await createTMDBRequest(`movie/${movieNumber}/videos`, {});
    return response.data;
};

export const nowPlayingApi = async page => {
    const response = await createTMDBRequest(`movie/now_playing`, { page });
    return response.data;
};

export const topRatedApi = async page => {
    const query = `?page=${page}`;
    const response = await createTMDBRequest(`movie/top_rated`, {
        page,
    });
    return response.data;
};

export const searchApi = async input => {
    const query = `?query=${input}`;
    //const query = `?query=%EC%B9%9C%EA%B5%AC&include_adult=false&language=ko-KR&page=1`;
    const response = await createTMDBRequest(`search/movie${query}`);
    //const response = await createTMDBRequest(`movie/${title}?title='${query}`);
    return response.data;
};
