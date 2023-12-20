import { useQuery } from '@tanstack/react-query';
import { MovieDetailApi } from 'apis/movieDetailApi';
import { useSearchParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieDetailData', movieId],
        queryFn: () => MovieDetailApi(movieId),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    console.log(data);

    return (
        <>
            <div>
                <h2>{data.data.title}</h2>
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.data.backdrop_path}`}
                />
                <p>{data.data.overview}</p>
                <p>{data.data.tagline}</p>
            </div>
        </>
    );
};
export default MovieDetailPage;
