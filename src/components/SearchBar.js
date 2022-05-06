export const SearchBar = ({ handleChange }) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search robofriends" 
                className="pa3 bn br3 bg-near-black white fw6 tracked shadow-5 mt3"
                onChange={handleChange}
            />
        </div>
    );
};