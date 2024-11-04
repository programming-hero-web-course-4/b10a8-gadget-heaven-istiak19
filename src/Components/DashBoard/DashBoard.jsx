import { useState } from "react";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const DashBoard = () => {
    const [value,setValue]=useState(true)
    return (
        <div>
            <div className="bg-[#9538E2] text-center space-y-3 py-8">
                <h2 className="text-3xl text-white font-bold">DashBoard</h2>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div>
                    <button onClick={()=>setValue(true)} className={`border border-white py-3 px-14 rounded-full mr-5 ${value?'btn':'bg-[#9538E2]'}`}>Cart</button>
                    <button onClick={()=>setValue(false)} className={`border border-white py-3 px-12 rounded-full ${value?'bg-[#9538E2]':'btn'}`}>WishList</button>
                </div>
            </div>
            {
                value?<Cart></Cart>:<WishList></WishList>
            }
        </div>
    );
};

export default DashBoard;