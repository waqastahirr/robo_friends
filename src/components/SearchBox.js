import React from 'react';

const searchBox = ({ onSearch }) => {
  return (
    <div className='search-container'>
      <input type='search' placeholder='search a person' onChange={onSearch} />
    </div>
  )
}

export default searchBox;