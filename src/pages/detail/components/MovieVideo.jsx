import { useQuery } from '@tanstack/react-query';
import { movieVideoApi } from 'apis/apiConfig';
import { useSearchParams } from 'react-router-dom';

const MovieVideo = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieVideoData', movieId],
        queryFn: () => movieVideoApi(movieId),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    console.log(data);

    return (
        <>
            <div>
                {data?.results.map(video => (
                    <iframe
                        key={video.id}
                        width="100%"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                        {video.site}
                    </iframe>
                ))}
            </div>
        </>
    );
};
export default MovieVideo;
