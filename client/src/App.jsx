import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from '../Components/signup';
import Login from '../Components/login';
import Quiz from '../Components/quiz';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/quiz",
      element: <Quiz/>
    }
  ]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
