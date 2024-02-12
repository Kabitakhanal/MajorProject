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
import About from "./irrelevant/About";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";

import NewsForm from "./pages/writenews";
import Footer from "./components/Footer";

import Finalhome from "./irrelevant/Finalhome";
import Newhome from "./irrelevant/Newhome";

import "./style.scss";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/write",
        element: <NewsForm />,
      },
      {
        path: "/newhome",
        element: <Newhome />,
      },
      {
        path: "/finalhome",
        element: <Finalhome />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/form",
    element: <NewsForm />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
