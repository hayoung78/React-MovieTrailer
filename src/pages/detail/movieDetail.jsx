import { useQuery } from '@tanstack/react-query';
import { movieDetailApi } from 'apis/apiConfig';
import { useSearchParams } from 'react-router-dom';

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

    return (
        <>
            <div>
                <h2>{data.title}</h2>
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                />
                <p>{data.overview}</p>
                <p>{data.tagline}</p>
                <MovieVideo />
            </div>
        </>
    );
};
export default MovieDetailPage;
