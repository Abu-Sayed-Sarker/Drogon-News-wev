import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LetestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Letest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
            <Link to={"news"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis ea quasi quam, dicta impedit qui debitis alias tempora cumque expedita corporis. Voluptate aut, veniam enim explicabo dolores harum tempora?</Link>
                    <Link to={"news"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis ea quasi quam, dicta impedit qui debitis alias tempora cumque expedita corporis. Voluptate aut, veniam enim explicabo dolores harum tempora?</Link>
                    <Link to={"news"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit omnis ea quasi quam, dicta impedit qui debitis alias tempora cumque expedita corporis. Voluptate aut, veniam enim explicabo dolores harum tempora?</Link>
            </Marquee>
        </div>
    );
};

export default LetestNews;