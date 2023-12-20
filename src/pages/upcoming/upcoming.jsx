import { useQuery } from '@tanstack/react-query';
import { upcomingApi } from 'apis/apiConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const UpcomingPage = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['upcoming', page],
        queryFn: () => upcomingApi(page),
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`../movie/${movie_id}${query}`);
    };

    return (
        <>
            <Styled.H3> Upcoming </Styled.H3>
            <Styled.Wrapper>
                {data?.results.map(movie => (
                    <Styled.Container
                        key={movie.id}
                        onClick={() => handleDetailPage(movie.id)}
                    >
                        <Styled.H3>{movie.title}</Styled.H3>
                        <Styled.Img
                            src={
                                movie.poster_path
                                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                    : 'https://media.istockphoto.com/id/1162708357/ko/%EC%82%AC%EC%A7%84/%EC%B6%94%EC%83%81-%EA%B8%B0%EC%88%A0-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EC%BD%94%EB%93%9C-background-digital-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%8F-%EB%B3%B4%EC%95%88-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%84%90-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-n.jpg?s=2048x2048&w=is&k=20&c=0ON2C3YCS26ketQHj53wBtUZh9S5Jxp70KQXmAELG9U='
                            }
                        />
                        <Styled.P>
                            평점 : {parseFloat(movie.vote_average).toFixed(1)}
                        </Styled.P>
                        <Styled.P>
                            {movie.overview.substring(0, 30)}...
                        </Styled.P>
                    </Styled.Container>
                ))}
            </Styled.Wrapper>
        </>
    );
};
export default UpcomingPage;

const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
const Container = styled.div`
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`;
const H3 = styled.h3`
    font-size: 15px;
`;
const P = styled.p`
    font-size: 13px;
`;

const Img = styled.img`
    width: 150px;
    height: 222.3px;
    object-fit: fill;
`;

const Styled = {
    Wrapper,
    Container,
    H3,
    Img,
    P,
};
