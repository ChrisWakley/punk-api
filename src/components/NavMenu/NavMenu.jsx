import { useState } from "react";
import "./NavMenu.scss";
import SearchBar from "../SearchBar/SearchBar";

import blackCross from "../../assets/images/black-cross.png";

const NavMenu = (props) => {
    const { toggleNav } = props;
    const [searchTerm, setSearchTerm] = useState("");

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
    };

    return (
        <div className="nav-menu">
            <div className="nav-menu__content">
                <img 
                    src={blackCross} 
                    alt="" 
                    className="nav-menu__cross"
                    onClick={toggleNav}
                />
                <SearchBar 
                    label={"beers"}
                    searchTerm={searchTerm}
                    handleInput={handleInput}
                />
                <p className="nav-menu__item">High ABV</p>
                <p className="nav-menu__item">Classic Range</p>
                <p className="nav-menu__item">Acidic</p>
            </div>
        </div>
    );
};

export default NavMenu;