import React, { useState } from 'react';
import { Icon, Button } from 'react-materialize';

function SearchForm() {
    const [search, setSearch] = useState('');

    const resetSearchField = () => {
        setSearch('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearch(search);
        resetSearchField();
    };

    return (
        <form>
            <div className="input-field">
                <input id="search" type="search" required value={search} />
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