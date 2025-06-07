import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from '../Components/Home.jsx'
import Search from '../Components/Search.jsx'
import AddNew from '../Components/AddNew.jsx'

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
      path:"/Search",
      element:<Search/>,
    },
    {
      path:"/AddNew",
      element:<AddNew/>
    }
    ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
