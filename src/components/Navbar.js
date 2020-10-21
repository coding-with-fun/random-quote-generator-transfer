import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand fixed-top navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    Wise Words
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
