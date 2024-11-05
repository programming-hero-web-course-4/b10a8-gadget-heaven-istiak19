import PropTypes from 'prop-types';

const Wish = ({ wish, handleRemove }) => {
    const { description, price, product_image, product_id, product_title } = wish
    return (
        <div className="shadow-lg mt-10 rounded-lg flex justify-between items-center">
            <div className="flex gap-5 flex-col lg:flex-row p-6">
                <img
                    src={product_image}
                    alt={product_title}
                    className="max-w-sm rounded-lg shadow-2xl w-48 h-28"
                />
                <div className="space-y-4">
                    <h1 className="text-2xl font-semibold">{product_title}</h1>
                    <p className="text-xs text-gray-500">{description}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemove(product_id)} className='mr-10'><i class="fa-regular fa-circle-xmark text-red-400"></i></button>
            </div>
        </div>
    );
};

Wish.propTypes = {
    wish: PropTypes.object.isRequired,
    handleRemove: PropTypes.func
};

export default Wish;