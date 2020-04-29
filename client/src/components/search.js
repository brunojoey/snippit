import React from 'react';
import { Icon } from 'react-materialize';

const SearchForm = () => (
    <form>
        <div className="input-field">
            <input id="search" type="search" required />
            <label htmlFor="search">
                <Icon>search</Icon>
            </label>
            <Icon>close</Icon>
        </div>
    </form>
);

export default SearchForm;