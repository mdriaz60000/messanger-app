import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen" >
          <Navbar></Navbar>
          <div className="flex-1 overflow-hidden">
             <Outlet></Outlet>
          </div>
         
          
        </div>
    );
};

export default MainLayout;