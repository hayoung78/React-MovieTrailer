import styled from 'styled-components';

const ScrollUp = () => {
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Styled.Box>
                <Styled.Button onClick={scrollUp}>&uarr;</Styled.Button>
            </Styled.Box>
        </>
    );
};
export default ScrollUp;

const Box = styled.div`
    position: fixed;
    right: 2%;
    bottom: 5%;
    z-index: 100;
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    background-color: rgb(100, 100, 100, 0.2);
    border: none;
    border-radius: 50%;
    font-size: 24px;
    &:hover {
        cursor: pointer;
    }
`;

const Styled = {
    Box,
    Button,
};
