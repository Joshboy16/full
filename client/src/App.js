import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Single from "./pages/Single";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./style.scss"


const Layout = ()=>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/post/:id",
        element: <Single/>
      },
      {
        path:"/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Single",
    element: <Single/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/Write",
    element: <Write/>,
  },
]);



function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}



export default App;
