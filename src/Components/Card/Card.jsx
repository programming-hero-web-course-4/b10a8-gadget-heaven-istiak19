import PropTypes from 'prop-types';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_id, product_title, product_image, price } = product
    return (
        <Link to={`/card/${product_id}`}>
            <div className="shadow-lg h-full rounded-lg">
                <figure className='w-[280px] h-[181px] p-5'>
                    <img className='w-full h-full rounded-xl'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="p-5 space-y-5">
                    <h2 className="text-xl font-medium">{product_title}</h2>
                    <p>Price: {price} $</p>
                    <NavLink><button className='btn text-[#9538E2] border border-[#9538E2] rounded-full'>View Details</button></NavLink>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired
};

export default Card;