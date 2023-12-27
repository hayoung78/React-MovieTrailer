import { useQuery } from '@tanstack/react-query';
import { movieDetailApi } from 'apis/apiConfig';
import StyledBtn from 'components/button';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import MovieVideo from './components/MovieVideo';

const MovieDetailPage = () => {
    const [params] = useSearchParams();
    const movieId = params.get('movie_id');

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['movieDetailData', movieId],
        queryFn: () => movieDetailApi(movieId),
    });

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    console.log(data);

    // 제목 포스터 별점 제작 연도 장르

    return (
        <>
            <Styled.Wrapper
                backgroundImage={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            >
                <Styled.Container>
                    <Styled.ImgBox>
                        <Img
                            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                        />
                    </Styled.ImgBox>
                    <Styled.TextBox>
                        <h1>{data.title}</h1>
                        <p>{data.original_title}</p>
                        <h3>{data.tagline}</h3>
                        <p>개봉일 : {data.release_date}</p>
                        <p>
                            장르 :{' '}
                            {data.genres.map(item => (
                                <span> {item.name}</span>
                            ))}
                        </p>
                        {/* <p>개봉일 : {data.release_date}</p> */}
                        <p>평점 : {parseFloat(data.vote_average).toFixed(1)}</p>
                    </Styled.TextBox>
                </Styled.Container>
                <Styled.TextContent>
                    <Styled.TextMenuBox>
                        <StyledBtn
                            backgroundColor={'#fff'}
                            color={'#000'}
                            width="200px"
                            boxShadow={'none'}
                        >
                            간략 정보
                        </StyledBtn>
                        <Styled.TextMenuItem>
                            {data.overview}
                        </Styled.TextMenuItem>
                    </Styled.TextMenuBox>
                </Styled.TextContent>
                <h1>영상</h1>
                <Styled.MovieBox>
                    <MovieVideo />
                </Styled.MovieBox>
            </Styled.Wrapper>
        </>
    );
};
export default MovieDetailPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* position: absolute; */
    /* background-image: url(${props => props.backgroundImage});
    background-size: cover; */
    margin-top: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Img = styled.img`
    width: 250px;
`;

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
`;

const ImgBox = styled.div``;

const TextBox = styled.div`
    width: 60%;
`;

const MovieBox = styled.div`
    margin-top: 30px;
    width: 50%;
    display: grid;
    justify-content: center;
    grid-template-rows: 1fr 1fr;
`;

const TextContent = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
`;
const TextMenuBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TextMenuItem = styled.p`
    margin-left: 70px;
`;

const Styled = {
    Wrapper,
    Img,
    Container,
    ImgBox,
    TextBox,
    MovieBox,
    TextContent,
    TextMenuBox,
    TextMenuItem,
};
