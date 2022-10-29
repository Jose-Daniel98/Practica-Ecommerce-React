import React from "react";
import CartWidget from "../CartWidget";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="https://www.google.com/">MiMarca</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="https://www.google.com/">Categoría 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="https://www.google.com/">Categoría 2</a>
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