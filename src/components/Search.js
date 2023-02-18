import React from 'react';
import './Search.css'


const Search=({setSearchText })=>{
    const handleSearch = event => {
        setSearchText(event.target.value);
      };
    return(
        <div>
            <input type="text" placeholder="Search posts" onChange={handleSearch} />
        </div>
    )
}

export default Search;