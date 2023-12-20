import axios from 'axios';

export const TMDBToken = process.env.REACT_APP_TMDB_TOKEN;
export const BaseUrl = 'https://api.themoviedb.org/3/movie';
const PopularPage = 'popular';

export const popularApi = async page => {
    const response = await axios.get(`${BaseUrl}/${PopularPage}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDBToken}`,
        },
        params: {
            language: 'ko-KR',
            region: 'KR',
            page,
        },
    });
    return response;
};
