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
            element:  <><Navbar/><Home/></>
          },
          {
            path :'/login',
            element: <><Navbar/><Login/></>
          },
          
          {
            path :'/About',
            element: <><Navbar/><About/></>
          },
          
      ])
  return (
    <div className="App">

      <>
    
      <RouterProvider router={router} /> 
      </>

      </div>
  );
}

export default App;
