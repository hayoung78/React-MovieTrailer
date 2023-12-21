import { useQuery } from '@tanstack/react-query';
import { nowPlayingApi } from 'apis/apiConfig';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const NowPlayingPage = () => {
    const [params] = useSearchParams();
    const [page, setPage] = useState(1);

    //무한스크롤 기능 구현
    //fetchNextPage : 다음페이지 불러오기
    //hasNextPage: 가져올 다음페이지가 있는지 여부 나타냄
    //getNextPageParam: 마지막데이터 받아올때 마지막페이지와 전체페이지 배열 받아옴
    // const { infiniteData, fetchNextPage, hasNextPage, isFetching } =
    //     useInfiniteQuery(
    //         queryKey: ['nowplaying', page],
    //         ({ pageParam = 1 }) => nowPlayingApi(pageParam),
    //         {
    //             select: data => ({
    //                 pages: data.pages,
    //                 pageParams: data.pageParams,
    //             }),
    //             getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    //         },
    //     );

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['nowplaying', page],
        queryFn: () => nowPlayingApi(page),
    });
    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    console.log(data, 'data');

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${movie_id}${query}`);
    };
    return (
        <>
            <Styled.Wrapper>
                {data.results.map(movie => (
                    <Styled.Container
                        key={movie.id}
                        onClick={() => handleDetailPage(movie.id)}
                    >
                        <Styled.H3>{movie.title.substring(0, 9)}..</Styled.H3>
                        <Styled.Img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                        <Styled.P>
                            ⭐평점 : {parseFloat(movie.vote_average).toFixed(1)}
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
export default NowPlayingPage;
const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-left: 50px;
`;

const Container = styled.div`
    width: 150px;
    &:hover {
        cursor: pointer;
    }
`;
const H3 = styled.h3`
    font-size: 17px;
`;
const P = styled.p`
    font-size: 13px;
`;

const Img = styled.img`
    width: 180px;
`;
const Styled = {
    Wrapper,
    Container,
    H3,
    Img,
    P,
};
