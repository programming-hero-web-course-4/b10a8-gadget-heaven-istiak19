import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-88px)]">
                <Outlet></Outlet>
            </div>
            <div className="mt-48">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;