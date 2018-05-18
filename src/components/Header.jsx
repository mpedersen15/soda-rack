import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header">
            <ul className="header__list">
                <li className="header__item">
                    <NavLink className="header__link" activeClassName="header__link--active" to={`/stations`}>Soda Stations</NavLink>
                </li>
                <li className="header__item">
                    <NavLink className="header__link" activeClassName="header__link--active" to={`/flavors`}>Soda Flavors</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;