import styled from 'styled-components';

const ButtonComponent = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>;
};
export default ButtonComponent;

const Button = styled.button`
    font-size: 13pt;
    background-color: #330066;
    color: #fff;
    width: 150px;
    height: 50px;
    margin: 5px;
    border: none;
    box-shadow: 1px 1px 1px 1px #000;
    border-radius: 8px;
    &:hover {
        cursor: pointer;
        background-color: #000;
    }
`;
