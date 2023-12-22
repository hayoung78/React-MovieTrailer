import { useInfiniteQuery } from '@tanstack/react-query';
import { popularApi } from 'apis/apiConfig';
import ButtonComponent from 'components/button';
import ScrollUp from 'components/ScrollUp';
import { useIntersectionObserver } from 'custom/useIntersectionObserver';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainPage = () => {
    const navigate = useNavigate();

    /*  useInfiniteQuery를 이용하여 무한 스크롤 기능을 구현하기 위함.
        popularApi 함수를 통해 페이지 데이터를 불러옴.
        사용자가 스크롤을 내릴 때마다 다음 페이지 데이터를 로드함.
    */
    const {
        data, // 무한한 쿼리 데이터를 포함하는 객체
        isError, // 에러 - Boolean
        error, // 에러
        fetchNextPage, // 다음 페이지의 데이터를 불러옴
        hasNextPage, // 더 불러올 페이지가 있는지를 나타냄 - boolean
        isFetching, // 현재 데이터를 불러오고 있는지 여부
        isFetchingNextPage, // 다음 페이지를 불러오는게 진행중인지를 나타냄 - boolean
    } = useInfiniteQuery({
        queryKey: ['popularData'], // query의 고유 식별자
        queryFn: ({ pageParam = 1 }) => popularApi(pageParam), // 데이터를 불러오는 함수
        getNextPageParam: lastPage => lastPage.page + 1, // 페이지를 불러오기 위한 파라미터를 반환 / lastPage.page + 1 은 다음 페이지를 로드하기 위함.
    });

    if (isError) return <div>ERRROR: {error.message}</div>; // error가 true 일 때, error message를 보여줌

    const lastMovieRef = useRef(null);

    useIntersectionObserver({
        target: lastMovieRef, // intersectionObserver가 관찰할 DOM요소 지정
        onIntersect: fetchNextPage, // target요소가 viewport에 들어올 때 실행될 함수
        enabled: hasNextPage, // 훅의 활성화 상태 제어
    });

    // const [page, setPage] = useState(1);
    // const { isPending, isError, data, error } = useQuery({
    //     queryKey: ['data', page],
    //     queryFn: () => popularApi(page),
    // });

    // if (isPending) return <div>Loading....</div>;
    // if (isError) return <div>Error: {error.message}</div>;
    // console.log(data);

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${movie_id}${query}`);
    };
    const handleNowPlayingPage = () => {
        const query = `now_playing`;
        navigate(`/movie/${query}`);
    };

    const handleTopRatedPage = () => {
        navigate(`/movie/top_rated`);
    };

    const handleUpcomingPage = () => {
        navigate(`/movie/upcoming`);
    };

    return (
        <>
            <Styled.ButtonWrapper>
                <ButtonComponent onClick={handleNowPlayingPage}>
                    Now Playing
                </ButtonComponent>
                <ButtonComponent onClick={handleTopRatedPage}>
                    Top Ranking
                </ButtonComponent>
                <ButtonComponent onClick={handleUpcomingPage}>
                    Up Coming
                </ButtonComponent>
            </Styled.ButtonWrapper>
            <Styled.Wrapper>
                {/* 전체 페이지들을 map돌려서 */}
                {data?.pages.map((el, index) => (
                    <React.Fragment key={index}>
                        {/* 페이지안에 영화(el)들을 map돌려서 */}
                        {el.results.map((rated, idx) => (
                            <Styled.Container
                                key={rated.id}
                                // useIntersectionObserver에 연결된 lastMovieRef를 마지막 영화 요소에 부여 - 마지막 요소를 감지하는데 사용됨.
                                ref={
                                    // 현재 페이지 내에 마지막 요소인 경우
                                    idx === el.results.length - 1
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
                {/* {data.results.map(movie => (
                    <Styled.Container
                        key={movie.id}
                        onClick={() => handleDetailPage(movie.id)}
                    >
                        <Styled.H3>{movie.title.substring(0, 10)}...</Styled.H3>
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
                ))} */}
                <ScrollUp />
            </Styled.Wrapper>
            <div>
                <button
                    onClick={() => fetchNextPage()} // 다음 페이지의 데이터를 불러옴
                    disabled={!hasNextPage || isFetchingNextPage} // 다음 페이지가 없거나 로딩 중이면 버튼 비활성화
                >
                    {isFetchingNextPage
                        ? 'Loding more...'
                        : hasNextPage
                          ? 'Load More'
                          : 'Nothing more to load'}
                </button>
            </div>
            <div>
                {/* 데이터 로딩 중임을 나타내는 메시지를 표시 */}
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
        </>
    );
};
export default MainPage;
const ButtonWrapper = styled.div``;

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
    ButtonWrapper,
    Button,
    Container,
    H3,
    Img,
    P,
};
