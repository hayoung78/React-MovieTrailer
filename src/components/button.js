import styled from 'styled-components';

const ButtonComponent = ({
    onClick,
    children,
    backgroundColor,
    color,
    width,
    height,
    margin,
    border,
    boxShadow,
    borderRadius,
}) => {
    return (
        <Button
            onClick={onClick}
            backgroundColor={backgroundColor}
            color={color}
            width={width}
            height={height}
            margin={margin}
            border={border}
            boxShadow={boxShadow}
            borderRadius={borderRadius}
        >
            {children}
        </Button>
    );
};
export default ButtonComponent;

const Button = styled.button`
    font-size: 13pt;
    background-color: ${props => props.backgroundColor || 'none'};
    color: ${props => props.color || 'inherit'};
    width: ${props => props.width || '150px'};
    height: ${props => props.height || '50px'};
    margin: ${props => props.margin || '5px'};
    border: ${props => props.border || 'none'};
    box-shadow: ${props => props.boxShadow || '1px 1px 1px 1px #000'};
    border-radius: ${props => props.borderRadius || '8px'};
    &:hover {
        cursor: pointer;
        background-color: #000;
        color: #fff;
    }
    @media (max-width: 1500px) {
        width: 70px;
        font-size: 11pt;
    }
`;
