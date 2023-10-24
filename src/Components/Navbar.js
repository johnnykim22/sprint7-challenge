import "./Styles/Navbar.css"
function Navbar() {
    return (
        <nav className="navbar">
            <a className='btn' href="/">Home</a>
            <a className='btn' href="/help">Help</a>
            <a className='btn' href="/pizza">Order Now</a>
        </nav>
    );
}

export default Navbar;