import logo from './logo.svg'
import './App.css'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'


function App() {

   const router = createBrowserRouter([
          {
            path:"/",
            element:<Home/>
          },
          {
            path :'/login',
            element:<Login/>
          },
          
          {
            path :'/About',
            element:<About/>
          },
          
      ])
  return (
    <div className="App">

      <>
      <Navbar/>
      <RouterProvider router={router} /> 
      </>

      </div>
  );
}

export default App;
