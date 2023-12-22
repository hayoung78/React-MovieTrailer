import { nowPlayingApi } from 'apis/apiConfig';
import BtnComponent from 'components/BtnComponent';
import { QueryComponents } from 'components/queryComponents';
import { useCustomQuery } from 'custom/useCustomQuery';
import React from 'react';
import styled from 'styled-components';

const NowPlayingPage = () => {
    const {
        data,
        lastMovieRef,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useCustomQuery({
        queryKey: ['nowplayingData'],
        dataApi: nowPlayingApi,
    });

    if (isError) return <div>Error: {error.message}</div>;

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
export default NowPlayingPage;

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
