import "./SearchBar.scss";

const SearchBar = (props) => {
    const { label, handleInput } = props;

    return (
        <form classlabel="search-bar">
            <label htmlFor={label} className="search-bar__label"></label>
            Search:
            <input 
                type="text"
                name= {label}
                onInput= {handleInput}
                classlabel="search-bar__input"
                />
                
        </form>
    );
};

export default SearchBar;