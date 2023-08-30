import React from 'react'
import {CiSearch} from 'react-icons/ci';

const Search = ( {handleSearchNote} ) => {
  return (
    <div className='search'>
      <CiSearch className='search-icon' size='1.3em'/>
      <input
        onChange={(event) => {
            handleSearchNote(event.target.value)
        }}
        type='text' 
        placeholder='Type to search...'/>
    </div>
  )
}

export default Search
