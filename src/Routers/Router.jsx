import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import NewsCategory from "../Components/pages/NewsCategory";


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
        path: "auth",
        element: <div>this is auth section</div>
    },
    {
        path: "*",
        element: <div>Error</div>
    }
])

export default Router;