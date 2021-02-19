import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'

const SearchBox = (props:any) => {
  const [searchText, setsearchText] = useState('')
  const [searchType, setSearchType] = useState('repositories')

  /**
   * This will be called every time there is
   * a change in the search type or the search text
   */
  useEffect(() => {
    const handleSearchChange = async () => {
      props.onSearchChange(searchType, searchText)
    }

    handleSearchChange()
  }, [searchText, searchType])

  
  return (
    <div>

      <Container>
        <svg style={{ fontSize: '40px', marginRight: '16px' }}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 496 512"
          height="1em"
          width="1em">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
        <div style={{ display: 'inline-block' }}>
          <p style={firstLine}>Github Searcher</p>
          <p style={secondLine}>Search users or repositories below</p>
        </div>

        <div>
          <Input
            type="text"
            placeholder={props.placeholder}
            value={searchText}
            onChange={e => setsearchText(e.target.value)} />
          <Select name="searchType" onChange={e => setSearchType(e.target.value)}>
            <option value="repositories">Repositories</option>
            <option value="users">Users</option>
          </Select>
        </div>
      </Container>
    </div>
  )

}

const Input = styled.input`
padding: 11px;
    font-size: 17px;
    width: 300px;
    border: 1px solid lightgray;
    padding: 10px 20px;
    margin-right: 5px;
`
const Select = styled.select`
color:gray;
padding: 9.4px;
    font-size: 17px;
    width: 150px;
    border: 1px solid lightgray;
    margin-right: 5px;
    &:focus {
        border-color: gray;
        transition: 0.5s;
      }
`
const Container = styled.div`
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    margin-left:15px;
    margin-bottom:10px;
`
const SVG = styled.svg`
vertical-align: text-bottom;
padding-right: 8px;
`
const firstLine = {
  fontWeight: 800,
  fontSize: 17,
  lineHeight: 0.5,

};

const secondLine = {
  lineHeight: 0.3

};

export default SearchBox