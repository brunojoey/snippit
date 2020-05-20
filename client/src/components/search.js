import React from 'react';
import { Icon, Button } from 'react-materialize';

function handleChange(event) {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value });
};

function SearchForm() {
    return (
        <form>
            <div className="input-field">
                <input id="search" type="search" required onChange={handleChange} />
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