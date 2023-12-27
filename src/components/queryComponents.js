import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonComponent from './button';
import ScrollUp from './ScrollUp';

export const QueryComponents = ({
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    lastMovieRef,
}) => {
    const navigate = useNavigate();

    const handleDetailPage = movie_id => {
        const query = `?movie_id=${movie_id}`;
        navigate(`/movie/${movie_id}${query}`);
    };

    return (
        <>
            <Styled.Wrapper>
                {/* 따로 뺄 수 있을꺼 같은데..... */}
                {/* 전체 페이지들을 map돌려서 */}
                {data?.pages.map((el, index) => (
                    <React.Fragment key={index}>
                        {/* 페이지안에 영화(el)들을 map돌려서 */}
                        {el.results.map((movie, idx) => (
                            <Styled.Container
                                key={movie.id}
                                // useIntersectionObserver에 연결된 lastMovieRef를 마지막 영화 요소에 부여 - 마지막 요소를 감지하는데 사용됨.
                                ref={
                                    // 현재 페이지 내에 마지막 요소인 경우
                                    idx === el.results.length - 1
                                        ? lastMovieRef
                                        : null
                                }
                                onClick={() => handleDetailPage(movie.id)}
                            >
                                <h3>{movie.title}</h3>
                                <Styled.Img
                                    src={
                                        movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                                            : 'https://media.istockphoto.com/id/1162708357/ko/%EC%82%AC%EC%A7%84/%EC%B6%94%EC%83%81-%EA%B8%B0%EC%88%A0-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EC%BD%94%EB%93%9C-background-digital-%EB%B0%94%EC%9D%B4%EB%84%88%EB%A6%AC-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EB%B0%8F-%EB%B3%B4%EC%95%88-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EA%B0%9C%EB%85%90%EA%B3%BC-%EB%84%90-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4-n.jpg?s=2048x2048&w=is&k=20&c=0ON2C3YCS26ketQHj53wBtUZh9S5Jxp70KQXmAELG9U='
                                    }
                                />
                                <Styled.P>
                                    ⭐평점 :
                                    {parseFloat(movie.vote_average).toFixed(1)}
                                </Styled.P>
                                <Styled.P>
                                    {movie.overview.substring(0, 30)}...
                                </Styled.P>
                            </Styled.Container>
                        ))}
                    </React.Fragment>
                ))}
                <ScrollUp />
                <div>
                    <ButtonComponent
                        onClick={() => fetchNextPage()} // 다음 페이지의 데이터를 불러옴
                        disabled={!hasNextPage || isFetchingNextPage} // 다음 페이지가 없거나 로딩 중이면 버튼 비활성화
                    >
                        {isFetchingNextPage
                            ? 'Loding more...'
                            : hasNextPage
                              ? 'Load More'
                              : 'Nothing more to load'}
                    </ButtonComponent>
                </div>
            </Styled.Wrapper>

            <div>
                {/* 데이터 로딩 중임을 나타내는 메시지를 표시 */}
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
        </>
    );
};

const ButtonWrapper = styled.div`
    position: fixed;
    top: 15px;
    z-index: 100;
`;

const Wrapper = styled.div`
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 150px;
    // padding-left: 50px;
    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 100px;
    }
`;
const Container = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    padding: 4px;
    box-shadow: 2px 2px 2px 2px #eee;
    background-color: #fff;
    border-radius: 16px;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: 1s;
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
    ButtonWrapper,
    Container,
    H3,
    Img,
    P,
};
