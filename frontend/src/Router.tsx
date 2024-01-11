import { createHashRouter, Link, Outlet, RouterProvider } from 'react-router-dom'
import Actors from './components/Actors'
import './router.css'
import Home from './App'

function Nav() {
  return (
    <>

    <div>
      <div className="title">
        <h1><Link className='link' to='/'>Movies</Link></h1>
      </div>
      <div className='containers'>
        <nav>
        <li className='actor'><Link className='link' to='/actors'>Actors</Link></li>
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
        { element: <Actors />, path: '/actors'}
      ],
      element: <Nav />
    }
  ])

  return <RouterProvider router={router} />
}

export default Router
