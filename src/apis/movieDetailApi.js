import axios from 'axios';

import { BaseUrl, TMDBToken } from './popularApi';

export const MovieDetailApi = async movieNumber => {
    const response = await axios.get(`${BaseUrl}/${movieNumber}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDBToken}`,
        },
        params: {
            language: 'ko-KR',
            region: 'KR',
        },
    });
    return response;
};
