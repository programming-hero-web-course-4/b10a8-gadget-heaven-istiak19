import { toast } from "react-toastify";

// Cart add to Local Storage
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (storedList.includes(id)) {
        toast.warn('This item is already in your cart!');
    } else {
        storedList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedList));
        toast.success('Successfully added to your cart!')
    }
}

const removeCartList = (id) => {
    const storedList = getStoredCartList()
    const remaining = storedList.filter(i => i != id)
    localStorage.setItem('cart-list', JSON.stringify(remaining))
}

// WishList Add to Local storage
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }
    return [];
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.warning('This item is already in your wish list!');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('Successfully added to your wishlist!')
    }
}

const removeWishList = (id) => {
    const storedList = getStoredWishList()
    const remaining = storedList.filter(i => i != id)
    localStorage.setItem('wish-list', JSON.stringify(remaining))
}

export { addToStoredCartList, getStoredCartList, addToStoredWishList, getStoredWishList, removeCartList, removeWishList };