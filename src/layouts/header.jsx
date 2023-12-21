import LogoImg from 'assets/imgs/show.png';
import styled from 'styled-components';

const Header = () => {
    return (
        <>
            <Styled.TitleWrapper>
                <Styled.ImgWrapper>
                    <Styled.Img src={LogoImg} />
                </Styled.ImgWrapper>
                <Styled.H1> OMEGA3BOX </Styled.H1>
            </Styled.TitleWrapper>
        </>
    );
};
export default Header;
const TitleWrapper = styled.div`
    background-color: #330066;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
`;
const ImgWrapper = styled.div`
    position: absolute;
    top: 2.5%;
    left: 35%;
`;
const Img = styled.img`
    width: 100px;
`;

const H1 = styled.h1`
    color: #fff;
    align-items: center;
`;
const Styled = {
    ImgWrapper,
    Img,
    TitleWrapper,
    H1,
};
