import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_id, product_title, product_image, price } = product
    const navigate = useNavigate()
    const viewDetailsBtn = () => {
        navigate(`/product/${product_id}`)
    }
    return (
        <div className="shadow-lg h-full rounded-lg border-2 border-purple-300">
            <figure className='w-[300px] h-[280px] p-5'>
                <img className='w-full h-full rounded-xl'
                    src={product_image}
                    alt={product_title} />
            </figure>
            <div className="p-5 space-y-5">
                <h2 className="text-xl font-medium">{product_title}</h2>
                <p>Price: {price} $</p><button onClick={viewDetailsBtn} className='btn text-[#9538E2] border border-[#9538E2] rounded-full'>View Details</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired
};

export default Card;