import { useInfiniteQuery } from '@tanstack/react-query';
import { topRatedApi } from 'apis/apiConfig';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TopRatedPage = () => {
    const navigate = useNavigate();

    const {
        data,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['topRatedData'],
        queryFn: ({ pageParam = 2 }) => topRatedApi(pageParam),
        getNextPageParam: lastPage => {
            return lastPage.nextCursor;
        },
    });

    if (isError) return <div>ERRROR: {error.message}</div>;

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${movie_id}${query}`);
    };

    return (
        <>
            <Styled.Wrapper>
                {data?.pages.map((group, index) => (
                    <React.Fragment key={index}>
                        {group.results.map(rated => (
                            <Styled.cContainer
                                key={rated.id}
                                onClick={() => handleDetailPage(rated.id)}
                            >
                                <h3>{rated.title}</h3>
                                <Styled.Img
                                    src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`}
                                />
                                <Styled.P>
                                    평점 :
                                    {parseFloat(rated.vote_average).toFixed(1)}
                                </Styled.P>
                                <Styled.P>
                                    {rated.overview.substring(0, 30)}...
                                </Styled.P>
                            </Styled.cContainer>
                        ))}
                    </React.Fragment>
                ))}
            </Styled.Wrapper>
            {isFetchingNextPage ? (
                <p>Loading...</p>
            ) : (
                hasNextPage && (
                    <button onClick={() => fetchNextPage()}>more</button>
                )
            )}
        </>
    );
};
export default TopRatedPage;

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
`;

const Styled = {
    Wrapper,
    Container,
    H3,
    Img,
    P,
};
