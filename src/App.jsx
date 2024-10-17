import { useState } from 'react'
import MovieDetails from './components/movieDetails'
import Filter from './components/MovieFilter'
import { Route, Routes } from 'react-router-dom'
import './style.css'
import  MovieList from './components/movieList'


function App() {
   const [movies, setMovies] = useState([
    {
        id: 1,
        title: 'Inception',
        rating: 8.8,
        description: 'A skilled thief is offered a chance to have his past crimes forgiven by planting an idea into a target\'s subconscious.',
        trailerLink: 'https://www.youtube.com/embed/YoHD9XEInc0',
        posterURL: 'https://m.media-amazon.com/images/I/81p+xe8cbnL.AC_SY679.jpg'
    },
    {
        id: 2,
        title: 'The Dark Knight',
        rating: 9.0,
        description: 'Batman faces off against the Joker, a criminal mastermind who wants to create chaos in Gotham City.',
        trailerLink: 'https://www.youtube.com/embed/EXeTwQWrcwY',
        posterURL: 'https://m.media-amazon.com/images/I/51K8ouYrHeL.AC.jpg'
    },
    {
        id: 3,
        title: 'Interstellar',
        rating: 8.6,
        description: 'A group of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        trailerLink: 'https://www.youtube.com/embed/zSWdZVtXT7E',
        posterURL: 'https://m.media-amazon.com/images/I/91kFYg4fX3L.SL1500.jpg'
    },
    {
        id: 4,
        title: 'The Matrix',
        rating: 8.7,
        description: 'A computer hacker learns the true nature of reality and his role in the war against its controllers.',
        trailerLink: 'https://www.youtube.com/embed/vKQi3bBA1y8',
        posterURL: 'https://m.media-amazon.com/images/I/51EG732BV3L.AC.jpg'
    },
    {
        id: 5,
        title: 'Gladiator',
        rating: 8.5,
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.',
        trailerLink: 'https://www.youtube.com/embed/owK1qxDselE',
        posterURL: 'https://m.media-amazon.com/images/I/51A1KXXD5iL.AC.jpg'
    },
    {
        id: 6,
        title: 'Avatar',
        rating: 7.8,
        description: 'A paraplegic Marine is sent to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
        trailerLink: 'https://www.youtube.com/embed/5PSNL1qE6VY',
        posterURL: 'https://m.media-amazon.com/images/I/41Vu7E4zXkL.AC.jpg'
    },
    {
        id: 7,
        title: 'Titanic',
        rating: 7.9,
        description: 'A young couple from different social classes fall in love aboard the ill-fated RMS Titanic.',
        trailerLink: 'https://www.youtube.com/embed/kVrqfYjkTdQ',
        posterURL: 'https://m.media-amazon.com/images/I/71fN57XbrgL.AC_SY679.jpg'
    },
    {
        id: 8,
        title: 'The Avengers',
        rating: 8.0,
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop Loki and his army from enslaving humanity.',
        trailerLink: 'https://www.youtube.com/embed/eOrNdBpGMv8',
        posterURL: 'https://m.media-amazon.com/images/I/71niXI3lxlL.AC_SY679.jpg'
    },
    {
        id: 9,
        title: 'Jurassic Park',
        rating: 8.1,
        description: 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
        trailerLink: 'https://www.youtube.com/embed/lc0UehYemQA',
        posterURL: 'https://m.media-amazon.com/images/I/81gepf1eMqL.AC_SY679.jpg'
    },
    {
        id: 10,
        title: 'Forrest Gump',
        rating: 8.8,
        description: 'The life story of a slow-witted man who unwittingly becomes involved in some of the major events of the 20th century.',
        trailerLink: 'https://www.youtube.com/embed/bLvqoHBptjg',
        posterURL: 'https://m.media-amazon.com/images/I/61Z7Z0tLmyL.AC_SY679.jpg',
    }

   
])
    const [filteredMovies, setFilteredMovies] =  useState(movies);

    const handleFilter = (title, rating) => {
        let filtered = movies;

        if (title) {
            filtered = filtered.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()))
        }

        if (rating) {
            filtered = filtered.filter((movie) => movie.rating >= rating)
        } 
        setFilteredMovies(filtered);
    }


    const addMovie = (e) => {
        e.preventDefault();
        const newMovie = {
            id: movies.length +1,
            title: e.target.title.value,
            description: e.target.description.value,
            posterURL: e.target.posterURL.value,
            rating: Number(e.target.rating.value)
        };

        setMovies([...movies, newMovie]);
        setFilteredMovies([...movies, newMovie]);
    }

    return (
        <div className='App'>
            <h1>My Movie App</h1>

            <form onSubmit={addMovie}>
                <input type="text" name="title" placeholder="Title" required />
                <input type="text" name="description" placeholder="Description" required />
                <input type="text" name="posterURL" placeholder="Poster URL" required />
                <input type="number" name="rating" placeholder="Rating (1-10)" required />

                <button type="submit">Add Movie</button>
            </form>


            <Filter onFilter={handleFilter} />


            <Routes>
                <Route path="/" element={<MovieList movies={movies}/>} />
                <Route path="/filteredmovies" element={<MovieList movies={filteredMovies}/>} />
                <Route path="/movie/:id" element={<MovieDetails movies={movies}/>}></Route>
            </Routes> 


            
        </div>
    );

}

export default App;

