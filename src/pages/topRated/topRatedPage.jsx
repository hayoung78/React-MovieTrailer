import { useInfiniteQuery } from '@tanstack/react-query';
import { topRatedApi } from 'apis/apiConfig';
import { useIntersectionObserver } from 'custom/useIntersectionObserver';
import React, { useRef } from 'react';
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
        isFetching,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['topRatedData'],
        queryFn: ({ pageParam = 1 }) => topRatedApi(pageParam),
        getNextPageParam: (lastPage, pages) => lastPage.page + 1,
    });

    if (isError) return <div>ERRROR: {error.message}</div>;

    const lastMovieRef = useRef(null);

    useIntersectionObserver({
        target: lastMovieRef,
        onIntersect: fetchNextPage,
        enabled: hasNextPage,
    });

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${movie_id}${query}`);
    };

    return (
        <>
            <Styled.Wrapper>
                {data?.pages.map((group, index) => (
                    <React.Fragment key={index}>
                        {group.results.map((rated, idx) => (
                            <Styled.Container
                                key={rated.id}
                                ref={
                                    idx === group.results.length - 1
                                        ? lastMovieRef
                                        : null
                                }
                                onClick={() => handleDetailPage(rated.id)}
                            >
                                <h3>{rated.title}</h3>
                                <Styled.Img
                                    src={`https://image.tmdb.org/t/p/w500${rated.poster_path}`}
                                />
                                <Styled.P>
                                    ⭐평점 :
                                    {parseFloat(rated.vote_average).toFixed(1)}
                                </Styled.P>
                                <Styled.P>
                                    {rated.overview.substring(0, 30)}...
                                </Styled.P>
                            </Styled.Container>
                        ))}
                    </React.Fragment>
                ))}
            </Styled.Wrapper>
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loding more...'
                        : hasNextPage
                          ? 'Load More'
                          : 'Nothing more to load'}
                </button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
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
