import { useNavigate } from 'react-router-dom';
import bannerPic from '../../assets/banner.jpg'
const Banner = () => {
    const navigate = useNavigate()
    const handleShopBtn = () => {
        navigate('/dashboard')
    }
    return (
        <div className="bg-[#9538E2] relative mb-60 mx-7 rounded-b-2xl">
            <div className="text-center space-y-5 text-white pb-52 px-40 pt-16">
                <h2 className="font-bold text-5xl">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-xs">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={handleShopBtn} className="btn font-bold rounded-full bg-white text-[#9538E2]">Shop Now</button>
            </div>
            <div className='absolute top-72 left-72 border-2 border-white p-6 backdrop-blur-3xl rounded-xl'>
                <img className='w-[862px] h-[363px] rounded-2xl' src={bannerPic} alt="Banner Pic" />
            </div>
        </div>
    );
};

export default Banner;