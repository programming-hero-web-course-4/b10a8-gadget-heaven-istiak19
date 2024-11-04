import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-288px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;