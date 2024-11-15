import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsCategory from "../Components/pages/NewsCategory";
import AuthLeyout from "../Layouts/AuthLeyout";
import Login from "../Layouts/Login";
import Registar from "../Layouts/Registar";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Navigate to={"/Catagory/01"}></Navigate>
            },
            {
                path: "/Catagory/:id",
                element: <NewsCategory></NewsCategory>,
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ],
    },
    {
        path: "news",
        element: <div>this news section</div>
    },
    {
        path: "/auth",
        element: <AuthLeyout></AuthLeyout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/ragister",
                element: <Registar></Registar>
            }
        ]
    },
    {
        path: "*",
        element: <div>Error</div>
    }
])

export default Router;