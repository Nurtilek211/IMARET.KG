import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/HomeP/Home";
import About from "./pages/About";
import ByYear from "./pages/ByYear";
import Partners from "./pages/Partners/Partners";
import WishList from "./pages/WishList/WishList";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/RegisterP/Register";
import Login from "./pages/Login/Login";
import DevelopersMenu from "./components/DevelopersMenu/DevelopersMenu";
import CompanyDetail from "./pages/CompanyDetail/CompanyDetail";
import Developers from "./components/Developers/Developers";
import Loading from "./components/Loading/Loading";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "year/:year",
        element: <ByYear />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "companies",
        element: <DevelopersMenu />,
      },
      {
        path: "companies/:id",
        element: <CompanyDetail />,
      },
      {
        path: "/complexes",
        element: <Developers />,
      }
    ],
  },
]);

export default myRouter;
