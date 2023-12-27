import LogoImg from 'assets/imgs/show.png';
import SearchBar from 'components/searchBar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    const navigate = useNavigate();

    const handleMainPage = () => {
        navigate(``);
    };

    return (
        <>
            <Styled.TitleWrapper>
                <Styled.ImgWrapper>
                    <Styled.Img src={LogoImg} />
                </Styled.ImgWrapper>
                <Styled.H1 onClick={() => handleMainPage()}>
                    OMEGA3BOX
                </Styled.H1>
                <SearchBar />
            </Styled.TitleWrapper>
        </>
    );
};
export default Header;
const TitleWrapper = styled.div`
    background-color: #330066;
    width: 100vw;
    height: 90px;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0px;
    z-index: 10;
`;
const ImgWrapper = styled.div`
    /* position: absolute;
    top: 2.5%;
    left: 33%; */
    @media (max-width: 1500px) {
        margin-left: 10%;
    }
    @media (max-width: 1000px) {
        margin-left: 40%;
    }
`;
const Img = styled.img`
    width: 100px;
    margin-top: 15px;
`;

const H1 = styled.h1`
    color: #fff;
    align-items: center;
    &:hover {
        cursor: pointer;
    }
`;
const Styled = {
    ImgWrapper,
    Img,
    TitleWrapper,
    H1,
};
