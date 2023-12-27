import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import ButtonComponent from './button';

const SearchBar = title => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleInputChange = e => {
        setInput(e.target.value);
    };

    const handleSearchClick = () => {
        navigate(`/search/movie?query=${encodeURIComponent(input)}`); // 띄어쓰기 = %20 , ! = %21 과 같이 ASCII 문자열로 변환하는 encoder
        //const 필터된데이터 = 기존데이터.filter(data => data.includes(input));
        console.log('Search Click', input);
        setInput('');
    };

    return (
        <>
            <Styled.Wrapper>
                <SearchInput
                    placeholder="제목을 입력하시져? ㅇㅋ"
                    value={input}
                    onChange={handleInputChange}
                />
                <ButtonComponent onClick={handleSearchClick}>
                    검색
                </ButtonComponent>
            </Styled.Wrapper>
        </>
    );
};
export default SearchBar;

const Wrapper = styled.div`
    position: absolute;
    right: 10%;
    top: 15%;
`;

const SearchInput = styled.input`
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 8px;
`;

const Styled = {
    Wrapper,
    SearchInput,
};
