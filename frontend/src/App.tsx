import * as React from 'react'
import { useEffect, useState } from 'react'
import './App.css'

interface movieListState {
  id: number
  name: string
  genre: string
  img: string
  rating: string
  description: string
}

function Root() {
  const [movies, setMovies] = useState<movieListState[]>([])
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [img, setImg] = useState('')
  const [rating, setRating] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result) => {
        setMovies(result)
      })
  }, [])

  const addAMovie = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const values: movieListState = {
      name,
      genre,
      img,
      rating,
      description,
      id: Date.now()
    }
    fetch('/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status.toString())
        }
        return response.json()
      })
      .then((movies) => {
        console.log('hej')
        console.log(movies)
        setMovies(movies)
        setName('')
        setGenre('')
        setImg('')
        setRating('')
        setDescription('')
      })
      .catch((error) => {
        console.log('hejsan', error)
      })

    // setTimeout(() => {
    //   location.reload()
    // }, 100)
  }

  return (
    <>
      <div className="container">
        {movies.map((movie) => (
          <div className="movieList" key={movie.id}>
            <h2 className="movieName">{movie.name} </h2>
            <h3 className="rating">
              <img
                className="starRating"
                src="solar_star-line-duotone.png"
                alt="Star icon"
              />
              {movie.rating}
            </h3>
            <img className="img" src={movie.img} alt="Movie picture." />
            <p className="genre">{movie.genre}</p>
            <p className="description">{movie.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>ADD A MOVIE:</h3>
        <form onSubmit={addAMovie} method="POST">
          <input
            id="name"
            type="text"
            placeholder="Movie name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            id="genre"
            type="text"
            placeholder="Movie genre"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          />
          <input
            id="img"
            type="text"
            placeholder="Image link"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
          <input
            id="rating"
            type="text"
            placeholder="IMDb rating"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
          />
          <input
            id="description"
            type="text"
            placeholder="Movie description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button id="submit" type="submit">
            Add a movie!!
          </button>
        </form>
      </div>
    </>
  )
}

export default Root
