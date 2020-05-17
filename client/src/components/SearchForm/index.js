import React, { useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Icon, Button, TextInput, Autocomplete } from 'react-materialize';
import snipsAPI from '../../utils/snipsAPI';
import './style.css';

function SearchForm(props) {
    const [options, setOptions] = useState({ data: {} })
    const [taglines, setTaglines] = useState([ { id: null, tagline: null } ]);
    const [redirect, setRedirect] = useState(null);
    
    useEffect(() => {
        async function fetchData() {
            const { data } = await snipsAPI.getSnips();
            let options = { data: { }};
            let taglines = [];

            data.forEach(snip => { 
                options.data[snip.tagLine] = null; 
                taglines.push({ id: snip._id, tagline: snip.tagLine });
            });

            setOptions(options);
            setTaglines(taglines);
        }
        fetchData();

    }, []);

    async function handleKeyDown(event) {
        if (event.key === 'Enter') { 
            event.preventDefault();
            let tagline = taglines.find(obj => obj.tagline === event.target.value);

            if (tagline) { setRedirect('/snips/' + tagline.id) }
            return;
        }
    }

    function handleClick(event) { event.target.value = ''; }

    return (
        <>
            {(redirect !== null) ? <Redirect to={redirect} /> : <></>}
            <Row>
                <Col s={12} m={8} offset='m2'>
                    <Autocomplete 
                        id='searchField'
                        options={options}
                        placeholder="What's your question?"
                        style={{ width: '100%' }}
                        onClick={handleClick}
                        onKeyDown={handleKeyDown}
                    />
                </Col>
            </Row>
        </>
    )
};

export default SearchForm;
