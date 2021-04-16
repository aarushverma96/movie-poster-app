import React from 'react';

const SearchBar = (props) => {
	return (
		<div className='search'>
			<input className='searchbar'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search...'>
			</input>
		</div>
	);

};

export default SearchBar;