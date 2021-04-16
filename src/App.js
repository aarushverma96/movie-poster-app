import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movies from './components/Movies.js'
import MovieInfo from './components/MovieInfo.js'
import SearchBar from './components/SearchBar.js'
import './App.css';

const App = ()=>{

	 const [movies, setMovies] = useState([]);
	 const [searchValue, setSearchValue] = useState('wild');
	 const [movieInfo, setMovieInfo] = useState('');


	 const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};


	const getMovieInfo = async (id) => {
		const url = `https://www.omdbapi.com/?i=${id}&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();


		if (responseJson) {
			setMovieInfo(responseJson);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);
	return(
		<>
			<div>
					<header>
						<div>
							<SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
						</div>
					</header>
							
			</div>
			{typeof movieInfo.Title != "undefined" ? <MovieInfo movieInfo={movieInfo}/> : false}
			<div className='container-fluid'>

				<div className='movie-container'>
					<Movies movies={movies} getMovieInfo={getMovieInfo} />
				</div>

			</div>
						
		</>
	);
};

export default App;