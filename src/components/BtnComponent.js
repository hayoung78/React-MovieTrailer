import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonComponent from './button';

const BtnComponent = () => {
    const navigate = useNavigate();

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
        <Styled.ButtonWrapper>
            <ButtonComponent
                onClick={handleNowPlayingPage}
                backgroundColor={'#330066'}
                color={'#fff'}
            >
                Now Playing
            </ButtonComponent>
            <ButtonComponent
                onClick={handleTopRatedPage}
                backgroundColor={'#330066'}
                color={'#fff'}
            >
                Top Ranking
            </ButtonComponent>
            <ButtonComponent
                onClick={handleUpcomingPage}
                backgroundColor={'#330066'}
                color={'#fff'}
            >
                Up Coming
            </ButtonComponent>
        </Styled.ButtonWrapper>
    );
};
export default BtnComponent;

const ButtonWrapper = styled.div`
    position: fixed;
    top: 15px;
    z-index: 100;
    @media (max-width: 1500px) {
        width: 400px;
    }
`;

const Styled = {
    ButtonWrapper,
};
