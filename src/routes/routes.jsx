import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Detailslayout from "../layout/Detailslayout";
import Details from "../pages/Details/details";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Bloglayout from "../layout/Bloglayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Privateroutes from "./Privateroutes";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },
    {
        path: 'details',
        element: <Detailslayout></Detailslayout>,
        children: [
            {
                path: ':id',
                element: <Privateroutes><Details></Details></Privateroutes>,
                loader: ({ params }) => fetch(`https://food-site-server-arafat717.vercel.app/alldata/${params.id}`)
            }
        ]
    },
    {
        path: 'blog',
        element: <Bloglayout></Bloglayout>,
        children: [
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'register',
        element: <Register></Register>
    },
    {
        path: '*',
        element: <Error></Error>
    }

])

export default router;