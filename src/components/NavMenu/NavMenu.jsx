import "./NavMenu.scss";
import SearchBar from "../SearchBar/SearchBar";
import CheckBoxes from "../CheckBox/CheckBox";

const NavMenu = (props) => {
    const { handleInput, label, handleChange } = props;

    return (
        <div className="nav-menu">
            <div className="nav-menu__content">
                <SearchBar handleInput = {handleInput} label = {label}/>
                <CheckBoxes handleChange={handleChange}/>
            </div>
        </div>
    );
};

export default NavMenu;