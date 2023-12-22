import { topRatedApi } from 'apis/apiConfig';
import BtnComponent from 'components/BtnComponent';
import { QueryComponents } from 'components/queryComponents';
import { useCustomQuery } from 'custom/useCustomQuery';
import React from 'react';
import styled from 'styled-components';

const TopRatedPage = () => {
    const {
        lastMovieRef,
        data,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
    } = useCustomQuery({ queryKey: ['topRatedData'], dataApi: topRatedApi });

    if (isError) return <div>ERRROR: {error.message}</div>;

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
export default TopRatedPage;

const Wrapper = styled.div`
    width: calc(100vw - 50px);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 50px;
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
`;

const Styled = {
    Wrapper,
    Container,
    H3,
    Img,
    P,
};
