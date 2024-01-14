import {
  createHashRouter,
  Link,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import './router.css'
import Home from './App'
import Actors from './components/Actors'
import OneMovie from './components/OneMovie'
import Random from './components/Random'

function Nav() {
  return (
    <>
      <div>
        <div className="title">
          <h1>
            <Link className="link" to="/">
              Movies
            </Link>
          </h1>
        </div>
        <div className="containers">
          <nav>
            <li className="li-list">
              <Link id="actorList" className="link" to="/actors">
                List of Actors and Actresses
              </Link>
            </li>
            <li id="randomMovie" className="li-list li-list-space">
              <Link className="link" to="/random">
                Randomizer
              </Link>
            </li>
          </nav>
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

function Router() {
  const router = createHashRouter([
    {
      children: [
        { element: <Home />, path: '/' },
        { element: <Actors />, path: '/actors' },
        { element: <OneMovie />, path: '/:id' },
        { element: <Random />, path: '/random' }
      ],
      element: <Nav />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
