import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams()
    return (
        <div>
            <h2>Card..{id}</h2>
        </div>
    );
};

export default ProductDetails;