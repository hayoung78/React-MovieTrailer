import { useQuery } from '@tanstack/react-query';
import { movieVideoApi } from 'apis/apiConfig';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

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
            <Styled.Wrapper>
                {data?.results.map(video => (
                    <iframe
                        key={video.id}
                        width="400px"
                        height="250px"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                        {video.site}
                    </iframe>
                ))}
            </Styled.Wrapper>
        </>
    );
};
export default MovieVideo;

const Wrapper = styled.div`
    width: 100%;
`;

const Styled = {
    Wrapper,
};
