import React from "react";

const Footer = () => {
    return (
        <div>
            <nav className="navbar fixed-bottom navbar-light bg-light">
                <div className="navbar-text w-100 text-center">
                    Made with{" "}
                    <span>
                        <i className="fas fa-heart"></i>
                    </span>{" "}
                    and{" "}
                    <span>
                        <i className="fas fa-mug-hot"></i>
                    </span>{" "}
                    by <a href="https://github.com/harsh2124">Harsh</a>
                </div>
            </nav>
        </div>
    );
};

export default Footer;
