import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Autocomplete } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import snipsAPI from '../../utils/snipsAPI';
import './style.css';

function SearchForm(props) {
    const [options, setOptions] = useState({ data: {} });
    const [taglines, setTaglines] = useState([ { id: null, tagline: null } ]);
	const [redirect, setRedirect] = useState(null);
	const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchData() {
            const { data } = await snipsAPI.getSnips();
            let options = { data: { }};
            let taglines = [];

            data.forEach(snip => {
                options.data[snip.tagLine] = null;
                taglines.push({ id: snip._id, tagline: snip.tagLine });
			});
			
			// Must update search with autocomplete option because onChange event
			// isn't triggered when an autocompleted option is clicked.
			options.onAutocomplete = (event) => setSearch(event);

            setOptions(options);
            setTaglines(taglines);
        }
        fetchData();

	}, []);
	
	function handleChange(event) {
		event.preventDefault();
		setSearch(event.target.value);
	}

	function handleAutoClick(event) {
		event.preventDefault();
		if (search === '') { event.target.value = '' }
	}

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            const entered = event.target.value.toLowerCase();
            const tagline = taglines.find(obj => obj.tagline.toLowerCase() === entered);

            if (tagline) { setRedirect('/snips/' + tagline.id); }
            return;
		}
    }

    function handleClick(event) {
		event.preventDefault();
		const entered = search.toLowerCase();
		const tagline = taglines.find(obj => obj.tagline.toLowerCase() === entered);

		if (tagline) { setRedirect('/snips/' + tagline.id); return; }
		if (options.data[tagline] === undefined) { setSearch('') }
    }

    return (
		<>
			{(redirect !== null) ? <Redirect push to={redirect} /> : <></>}
			<Row>
				<Col s={12} m={8} offset='m2' id='searchInput'>
					<form>
						<Row>
							<Col s={11} className='no-padding-right'>
								<Autocomplete
									options={options}
									placeholder="What's your question?"
									style={{ width: '100%' }}
									onKeyDown={handleKeyDown}
									onChange={handleChange}
									onClick={handleAutoClick}
								/>
							</Col>
							<Col s={1} className='no-padding-left'>
								<button className='search-button' onClick={handleClick}>
									<FontAwesomeIcon size='2x' icon={faSearch}></FontAwesomeIcon>
								</button>
							</Col>
						</Row>
					</form>
				</Col>
			</Row>
		</>
    );
};

export default SearchForm;
