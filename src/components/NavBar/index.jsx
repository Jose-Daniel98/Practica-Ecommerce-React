import React from "react";
import CartWidget from "../CartWidget";
import "./navBar.css";


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="https://www.google.com/">🏠</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="https://www.google.com/">Nosotros</a>
                    </li>
                    <li>
                        <a className="nav_link" href="https://www.google.com/">Productos</a>
                    </li>
                    <li>
                        <a className="nav_link" href="https://www.google.com/">
                            <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;