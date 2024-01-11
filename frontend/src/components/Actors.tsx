import { useState } from 'react'
import './Actors.css'

function Actors() {
  const [list, setList] = useState(false)

  const click = () => {
    setList(!list)
  }

  return (
    <>
      <h2 className="title">Actors and Actresses</h2>

      {list ? (
        <div>
          <ul className="listContainer">
            <li>
              Meryl Streep
              <img
                className="actorImage"
                src="Meryl-Streep.webp"
                alt="Picture of Meryl Streep"
              />
            </li>
            <li>
              Johnny Depp
              <img
                className="actorImage"
                src="Johnny-Depp.webp"
                alt="Picture of Johnny Depp"
              />
            </li>
            <li>
              Anne Hathaway
              <img
                className="actorImage"
                src="Anne-Hathaway.webp"
                alt="Picture of Anne Hathaway"
              />
            </li>
            <li>
              Julie Andrews
              <img
                className="actorImage"
                src="Julie-Andrews.jpg"
                alt="Picture of Julie Andrews"
              />
            </li>
          </ul>
          <div className="styleButton">
            <button onClick={click}>Hide List</button>
          </div>
        </div>
      ) : (
        <div className="styleButton">
          <button id="showButton" onClick={click}>
            Show List!
          </button>
        </div>
      )}
    </>
  )
}
export default Actors
