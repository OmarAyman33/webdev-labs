import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function MovieInput({ onAddMovie }) {
  const [movieTitle, setMovieTitle] = useState('')
  const [rating, setRating] = useState('⭐⭐⭐⭐⭐')
 
  function addMovie() {
    if (movieTitle.trim() === '') return // mafeesh input
    onAddMovie({ title: movieTitle, rating: rating })
    setMovieTitle('') // clear input
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <input type="text" placeholder="Enter movie title..." value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}/>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',gap: '10px', marginTop: '10px'}}> 
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>
        <button onClick={addMovie}>Submit</button>
      </div>
    </div>
  )
}


function MovieCard({ title, rating }) {
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')

  function addComment() {
    if (commentText.trim() === '') return // user 8aby b2a
    setComments([...comments, commentText])
    setCommentText('') // clear input
  }

  return (
    <div className="movie-card">
      <h3 className="movie-title">{title}</h3>
      <div className="movie-rating">{rating}</div>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li>{comment}</li>
        ))}
      </ul>
      <div className="comment-form">
        <input type="text" placeholder="Add a comment..." value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
        <button onClick={addComment}>Comment</button>
      </div>
    </div>
  )
}

function App() {
  const [movies, setMovies] = useState([])

  function addMovie(movie) {
    setMovies([...movies, movie])
  }

  return (
    <div className="app">
      <MovieInput onAddMovie={addMovie} />
      {movies.map((movie) => (
        <MovieCard title={movie.title} rating={movie.rating} />
      ))}
    </div>
  )
}

export default App