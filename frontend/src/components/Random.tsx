import { useEffect, useState } from 'react'
interface states {
  name: string
  img: string
}

function Random() {
  const [allMovies, setAllMovies] = useState<states[]>([])
  const [random, setRandom] = useState<states | null>(null)
  const [buttonText, setButtonText] = useState('Get Movie')

  useEffect(() => {
    fetch('/movies')
      .then((response) => response.json())
      .then((result: states[]) => {
        setAllMovies(result)
      })
  }, [])

  const randomize = () => {
    const randomIndex = Math.floor(Math.random() * allMovies.length)
    const randomizedMovie = allMovies[randomIndex]
    setRandom(randomizedMovie)
    setButtonText('Get A New Movie')
  }

  return (
    <>
      <div>
        <h2>What should I watch?</h2>
        <p>
          Can't decide what to watch? Click on the button and get a movie to
          watch!
        </p>
        <button id="button" onClick={randomize}>
          {buttonText}
        </button>
        {random && (
          <div className="randomMovie">
            <h3 className="movieName">{random.name}</h3>
            <img src={random.img} alt="Movie picture" />
          </div>
        )}
      </div>
    </>
  )
}
export default Random
