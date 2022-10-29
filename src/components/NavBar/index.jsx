import React from "react";

export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">MiMarca</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Categoría 1</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Categoría 2</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;