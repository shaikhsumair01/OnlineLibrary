import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../Components/Home.jsx'
import Search from '../Components/Search.jsx'
import AddNew from '../Components/AddNew.jsx'
import Bookdesc from '../Components/Bookdesc.jsx'
import Error from '../Components/Error.jsx'
import Category from '../Components/CategoryPage.jsx'

// Creating routes
const Routes = createBrowserRouter(
  [{
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children:[{
      path:"/",
      element:<Home/>,
    },
    {
      path:"/book/:id",
      element:<Bookdesc/>,
    },
    {
      path:"/Search/:category",
      element:<Category/>
    },
    {
      path:"/Search",
      element:<Search/>,
    },
    {
      path:"/AddNew",
      element:<AddNew/>
    }
    ]
  }])

  // Rendering the routes
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
