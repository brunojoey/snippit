import React, { useContext } from 'react';
import { Icon, Button } from 'react-materialize';
import KeywordContext from '../utils/KeywordContext';

function SearchForm() {
    const { keywords, updateKeywords } = useContext(KeywordContext);

    const resetSearchField = () => {
        updateKeywords('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateKeywords(keywords);
        resetSearchField();
    };

    return (
        <form>
            <div className="input-field">
                <input id="search" type="search" required value={keywords} />
                <label htmlFor="search">
                <Icon>Search</Icon>
                </label>
                <Button node='button' type='submit' waves='light' onClick={handleSubmit}>Submit</Button>
                <Icon>Close</Icon>
            </div>
        </form>
    )
};

export default SearchForm;