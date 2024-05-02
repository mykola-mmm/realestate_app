import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/layout";
import ListPage from "./routes/ListPage/listpage";
import HomePage from "./routes/HomePage/homepage"
import SinglePage from "./routes/SinglePage/singlepage"

import "./layout/layout.scss"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: ":id",
          element: <SinglePage />
        }
      ]
    }
  ]);

  return (
    // <div className='layout'>
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>

    // </div>
    <RouterProvider router={router} />
  )
}

export default App
