import React, { useState, useContext } from 'react';
import { Icon, Button, TextInput } from 'react-materialize';
import SearchLanguage from '../SearchLanguage';
import KeywordContext from '../../utils/KeywordContext';

function SearchForm(props) {
    const { keywords, updateKeywords } = useContext(KeywordContext);
    const [state, setState] = useState({
        search: '',
        language: ''
    });
    

    const resetSearchField = () => {
        updateKeywords();
    };

    function handleChange(event) {
        const name = event.target.name;
        setState({ ...state, [name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const words = state.search.split(' ');

        words.forEach(word => {
            updateKeywords(word);
        });
    };

    return (
        <form>
            <div className="input-field">
                <TextInput className='search' name='search' placeholder="Search" noLayout onChange={handleChange} />
                <Button node='button' type='submit' waves='light' onClick={handleSubmit}>Submit</Button>
            </div>
            <SearchLanguage />
        </form>
    )
};

export default SearchForm;
