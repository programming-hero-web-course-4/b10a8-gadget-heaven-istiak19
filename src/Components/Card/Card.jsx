import PropTypes from 'prop-types';

const Card = ({ product }) => {
    const {product_id,product_title,product_image,price}=product
    return (
        <div>
            <div className="shadow-2xl h-full rounded-lg">
                <figure className='w-[280px] h-[181px] p-5'>
                    <img className='w-full h-full rounded-xl'
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="p-5 space-y-5">
                    <h2 className="text-xl font-medium">{product_title}</h2>
                    <p>Price: {price} $</p>
                    <button className='btn'>View Details</button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    product: PropTypes.object.isRequired
};

export default Card;