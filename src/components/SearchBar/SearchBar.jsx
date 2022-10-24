import "./SearchBar.scss";

const SearchBar = (name, searchTerm, handleInput) => {

    // const CapitalisedName = name[0].toUpperCase() + name.slice(1);

    return (
        <form className="search-bar">
            <label htmlFor={name} className="search-bar__name"></label>
                {/* {CapitalisedName} */}
            <input 
                type="text"
                name= {name}
                value= {searchTerm}
                onInput= {handleInput}
                className="search-bar__input"
                />
        </form>
    );
};

export default SearchBar;