interface SearchBarProps{
    searchTerm: string,
    onSearchChange: (val: string) => void;
}

function SearchBar({ searchTerm, onSearchChange}: SearchBarProps){
    return(
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search your favourite shows..."
                value={searchTerm}
                onChange={(event) => onSearchChange(event.target.value)}
            />
            <button 
                type="button"
                className="clear-button"
                onClick={() => onSearchChange("")}>
                clear
            </button>
        </div>
    );
}

export default SearchBar;