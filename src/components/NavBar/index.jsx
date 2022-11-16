import {NavLink} from "react-router-dom";
import CartWidget from "../CartWidget";
import Logo from "../../assets/Logo.png"
import "./navBar.css";

import React from "react";

export const NavBar = () => {
    return (
        <div className="container_navbar">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'><img src={Logo} alt="Logo"/></NavLink>
                    {/* <NavLink className="nav_link" to='/'>MiMarca</NavLink> */}
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/categoria/films'>Inalámbricos</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/categoria/series'>Con Cable</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/cart'>
                            <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;