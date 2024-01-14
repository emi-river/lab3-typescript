import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './OneMovie.css'

interface Movie {
  name: string
  genre: string
  img: string
  rating: string
  description: string
}

function OneMovie() {
  const [movieInfo, setMovieInfo] = useState<Movie | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    fetch(`/movies/${id}`)
      .then((response) => response.json())
      .then((result: Movie[]) => {
        console.log(result)
        setMovieInfo(result[0])
      })
  }, [id])

  return (
    <>
      {movieInfo && (
        <div>
          <h1 className="title">{movieInfo.name}</h1>
          <div id="selectedMovie">
            <img className="oneImg" src={movieInfo.img} />
            <p className="movieDesc">{movieInfo.description}</p>
          </div>
          <p>More features coming soon...</p>
        </div>
      )}
    </>
  )
}

export default OneMovie
