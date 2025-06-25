import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setnav] = useState(false);

    const changebackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    };
    
    window.addEventListener('scroll', changebackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <div className="headinglogo">
                <h2>Vikas Jyotish Kendra</h2>
            </div>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link className="menutextcolor" to="/">Home</Link></li>
                <li><Link className="menutextcolor" to="/blogs">Blogs</Link></li>
                <li><Link className="menutextcolor" to="/aboutus">About Us</Link></li>
                <li><Link className="menutextcolor" to="/contactus">Contact Us</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
