
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Registration from './Components/Registration'
import Navbar from './Components/Navbar'
import Membership from './Components/Membership'
import About from './Components/About'
import Contact from './Components/Contact'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Registration",
      element:<><Navbar/> <Registration /></>
    },
    {
      path: "/Membership",
      element:<><Navbar/><Membership /></>
    },
    {
      path: "/Contact",
      element:<><Navbar/><Contact/></>
    },
    {
      path: "/About",
      element:<><Navbar/><About/></>
    },
  
  ])
  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App
