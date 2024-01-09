import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import Main from './Component/Routers/Main';
import Home from './Component/Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
     {
      path:"/",
      element:<Home/>
     }

    ]
      
  },
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className= "container m-auto bg-[url('https://i.ibb.co/6JX0K36/services-bg.png')]  ">
      <RouterProvider router={router} />    
    </div> 

  </React.StrictMode>,
)
 