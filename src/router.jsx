import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/HomeP/Home"
import About from "./pages/About"
import ByYear from "./pages/ByYEar"
import Partners from "./pages/Partners/partners"
 
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/year/:year",
        element: <ByYear />
      },
      {
        path: "/partners",
        element: <Partners/>
      }
    ]
  }
])

export default myRouter
