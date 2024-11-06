import { useEffect, useState } from "react";
import { getStoredWishList, removeWishList } from "../utility/Utility";
import Wish from "./Wish";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
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

    const handleRemove = (id) => {
        removeWishList(id)
        const storedWishList = getStoredWishList()
        const storedWishListIn = storedWishList.map(id => parseInt(id))
        const wishListFilter = products.filter(product => storedWishListIn.includes(product.product_id))
        setWishList(wishListFilter)
        toast.success('This item has been removed from your list.');
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>WishList - GadgetHeaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="mt-5">
                <h2 className="font-bold text-xl">Wishlist</h2>
            </div>
            <div>
                {
                    wishlist.map(wish => <Wish key={wish.product_id} wish={wish} handleRemove={handleRemove}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishList;