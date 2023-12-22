import styled from 'styled-components';

// const ButtonWrapper = styled.div``;
const Button = styled.button`
    font-size: 13pt;
    background-color: #330066;
    color: #fff;
    width: 150px;
    height: 50px;
    margin: 5px;
    border-radius: 45%;
`;

const ButtonComponent = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
};
export default ButtonComponent;
