import { useEffect, useState } from "react";
import { getStoredWishList } from "../utility/Utility";
const WishList = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishList] = useState([])
    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListIn = storedWishList.map(id => parseInt(id))
        const wishListFilter = products.filter(product => storedWishListIn.includes(product.product_id))
        setWishList(wishListFilter)
    }, [products])
    return (
        <div>
            <h2>wishlist {wishlist.length}</h2>
        </div>
    );
};

export default WishList;