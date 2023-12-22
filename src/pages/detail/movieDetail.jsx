import { useQuery } from '@tanstack/react-query';
import { movieDetailApi } from 'apis/apiConfig';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import MovieVideo from './components/MovieVideo';

const MovieDetailPage = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieDetailData', movieId],
        queryFn: () => movieDetailApi(movieId),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    console.log(data);

    // 제목 포스터 별점 제작 연도 장르

    return (
        <>
            <Styled.Wrapper>
                <h2>{data.title}</h2>
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                />
                <p>{data.overview}</p>
                <p>{data.tagline}</p>
                <MovieVideo />
            </Styled.Wrapper>
        </>
    );
};
export default MovieDetailPage;

const Wrapper = styled.div``;

const Styled = {
    Wrapper,
};
