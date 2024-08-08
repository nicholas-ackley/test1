import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import Home from './Pages/Home/Home'
import './Pages/Home/Home.css'
import Navbar from './Navbar/Navbar'

const router = createBrowserRouter([
  {
    path:'/',
    children:[
      {path:'/', element: <Home/> },
      {path:'/About' , element: <About/> },
      {path:'/Projects' , element: <Projects/> },
      
      // {path:'/Music', element: <Music/> }


    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Home/> */}
  </React.StrictMode>
);