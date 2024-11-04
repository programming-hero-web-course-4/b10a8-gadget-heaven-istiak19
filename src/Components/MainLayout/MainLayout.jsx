import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { createContext, useState } from "react";

export const CartContext = createContext([])

const MainLayout = () => {
    const [cart, setCart] = useState([])
    return (
        <div>
            <CartContext.Provider value={[cart,setCart]}>
                <NavBar></NavBar>
                <div className="min-h-[calc(100vh-288px)]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </CartContext.Provider>
        </div>
    );
};

export default MainLayout;