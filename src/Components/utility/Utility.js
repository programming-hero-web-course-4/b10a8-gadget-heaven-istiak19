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
        alert('Item already exists in the cart');
    } else {
        storedList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedList));
    }
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
        alert('Item already exists in the wishlist');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    }
}

export { addToStoredCartList, getStoredCartList, addToStoredWishList, getStoredWishList };