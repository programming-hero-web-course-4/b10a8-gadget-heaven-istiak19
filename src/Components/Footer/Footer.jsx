const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-3 border-b-2 pb-5">
                <h2 className="font-bold text-3xl">Gadget Heaven</h2>
                <p className="text-gray-600">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <footer className="footer p-10 flex justify-evenly">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;