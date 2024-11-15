import { Outlet } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";
import RightNavbar from "./RightNavbar";

const Main = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <aside className="col-span-3">
                <LeftNavbar></LeftNavbar>
            </aside>            
            <div className="col-span-6">
                <Outlet></Outlet>
            </div>            
            <aside  className="col-span-3">
                <RightNavbar></RightNavbar>
            </aside >            
        </div>
    );
};

export default Main;