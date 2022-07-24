import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectInput, setSearchField } from "../../features/setSearchField/searchField";

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const input = useAppSelector(selectInput);
    
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search robofriends" 
                className="pa3 bn br3 bg-near-black white fw6 tracked shadow-5 mt3"
                value={input}
                aria-label="search robofriends"
                onChange={(e) => dispatch(setSearchField(e.target.value))}
            />
        </div>
    );
};

export default SearchBar;
