import BtnComponent from 'components/BtnComponent';
import { QueryComponents } from 'components/queryComponents';
import { useCustomQuery } from 'custom/useCustomQuery';
import { useIntersectionObserver } from 'custom/useIntersectionObserver';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// SearchPage 하나로 다른 페이지를 다 불러옴
const SearchPage = ({ queryKey = [], dataApi }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query');
    console.log('query', query);

    const {
        data,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useCustomQuery({
        queryKey: [queryKey, query],
        dataApi: () => dataApi(query),
    });

    if (isError) return <div>Error: {error.message}</div>;

    const lastMovieRef = useRef(null);

    useIntersectionObserver({
        target: lastMovieRef, // intersectionObserver가 관찰할 DOM요소 지정
        onIntersect: fetchNextPage, // target요소가 viewport에 들어올 때 실행될 함수
        enabled: hasNextPage, // 훅의 활성화 상태 제어
    });

    console.log(data, 'search data');

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
export default SearchPage;

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
