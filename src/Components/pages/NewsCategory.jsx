import { useLoaderData } from "react-router-dom";
import News from "../News";

const NewsCategory = () => {
    const { data:Allnews } = useLoaderData()
    

    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Dragon News Home</h2>
            <div className="space-y-3">
                {
                    Allnews.map(news=> <News key={news._id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default NewsCategory;