import React from 'react';

const Movieinfo = ({movieInfo})=>{

	return (
		<>
			<div className="content">
				<h2>{ movieInfo.Title } <span>({ movieInfo.Year })</span></h2>
				<p className="rating">Rating: {movieInfo.imdbRating}</p>
				<div className="plot">
					<img src={movieInfo.Poster} />
					<p>{movieInfo.Plot}</p>
				</div>
			</div>
		</>
	);
};

export default Movieinfo;

