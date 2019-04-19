import React from 'react'

//everytime the onChange is triggered, searchChange is called
const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className = 'pa2'>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots by name' 
				onChange={searchChange} 
			/>
		</div>
	);
}

export default SearchBox;