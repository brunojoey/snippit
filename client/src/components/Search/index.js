import React, { useContext } from 'react';
import { Icon, Button } from 'react-materialize';
// import SearchLanguage from '../SearchLanguage';
import KeywordContext from '../../utils/KeywordContext';

function SearchForm(props) {
    const { keywords, updateKeywords } = useContext(KeywordContext);

    const resetSearchField = () => {
        updateKeywords();
    };

    const handleSubmit = () => {
        if (props.snip.body.includes(keywords)) {
            updateKeywords(keywords);
            resetSearchField();
        } else {
            return "You need keywords in the search bar.";
        }
    };

    return (
        <form>
            <div className="input-field">
                <input id="search" type="search" required />
                <label htmlFor="search">
                <Icon>Search</Icon>
                </label>
                <Button node='button' type='submit' waves='light' onClick={handleSubmit}>Submit</Button>
                <Icon>Close</Icon>
            </div>
            {/* <SearchLanguage /> */}
        </form>
    )
};

export default SearchForm;