import React from 'react';

const Movies = ({movies, getMovieInfo})=>{

	return (
		<>
				{movies.map((movie, index) => (
					<div className='m-3 movie'  onClick={() => getMovieInfo(movie.imdbID)}>
						<img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/No_image_available_500_x_500.svg/1024px-No_image_available_500_x_500.svg.png'} alt={movie.Title}></img>
						<div className='movie-name'>
							<h5>{movie.Title}</h5>
						</div>
					</div>
				))}
		</>
	);
};

export default Movies;

