import BtnComponent from 'components/BtnComponent';
import { QueryComponents } from 'components/queryComponents';
import { useCustomQuery } from 'custom/useCustomQuery';
import { useIntersectionObserver } from 'custom/useIntersectionObserver';
import React, { useRef } from 'react';
import styled from 'styled-components';

// MainPage 하나로 다른 페이지를 다 불러옴
const MainPage = ({ queryKey = [], dataApi }) => {
    const {
        data,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useCustomQuery({ queryKey: queryKey, dataApi: dataApi });

    if (isError) return <div>Error: {error.message}</div>;

    const lastMovieRef = useRef(null);

    useIntersectionObserver({
        target: lastMovieRef, // intersectionObserver가 관찰할 DOM요소 지정
        onIntersect: fetchNextPage, // target요소가 viewport에 들어올 때 실행될 함수
        enabled: hasNextPage, // 훅의 활성화 상태 제어
    });

    return (
        <>
            <Styled.Wrapper>
                <BtnComponent />

                <QueryComponents
                    data={data}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    lastMovieRef={lastMovieRef}
                />
            </Styled.Wrapper>
        </>
    );
};
export default MainPage;

const Wrapper = styled.div`
    width: calc(100vw - 50px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding-left: 50px;
    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 100px;
    }
`;

const Styled = {
    Wrapper,
};
