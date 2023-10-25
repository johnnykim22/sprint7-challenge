import "./Styles/Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="navbar">
            <a className='btn' href="/">Home</a>
            <a className='btn' href="/help">Help</a>
            <Link id='order-pizza' className='btn' to="/pizza">Order Now</Link>
        </nav>
    );
}

export default Navbar;