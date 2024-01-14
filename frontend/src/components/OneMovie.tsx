import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
          <div id="selectedMovie">
            <h1>{movieInfo.name}</h1>
            <img src={movieInfo.img} />
          </div>
          <div>
            <p>{movieInfo.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default OneMovie
