import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  width: 90%;
  cursor: pointer;
  gap: 6px;
  border: 1px solid ${({ theme }) => theme.text_secondary+90};
  color: ${({ theme }) => theme.text_primary};
  max-width: 550px;
  `;
const SearchBar = ({search,setSearch}) => {
  return (
    <SearchBarContainer>
        <SearchOutlined/>
        <input 
        placeholder='Search with prompt or name...'
        style={{
            border: "none",
            outline: "none",
            background: "transparent",
            color: "inherit",
            width: "100%",
            fontSize: "16px",
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </SearchBarContainer>
  )
}

export default SearchBar