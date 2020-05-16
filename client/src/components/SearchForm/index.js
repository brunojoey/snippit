import React, { useState, useContext, useEffect } from 'react';
import { Row, Col, Icon, Button, TextInput, Autocomplete } from 'react-materialize';
import TaglineContext from '../../utils/TaglineContext';
import snipsAPI from '../../utils/snipsAPI';
import './style.css';

function SearchForm(props) {
    const [state, setState] = useState({ search: '' });
    const [options, setOptions] = useState({
        data: {}
    })

    useEffect(() => {
        
        async function fetchData() {
            const { data } = await snipsAPI.getSnips();
            let options = { data: { }};

            data.forEach(snip => { options.data[snip.tagLine] = null; });
            setOptions(options);
        }
        fetchData();
        console.log('OPTIONS: ', options);

    }, []);

    // function handleChange(event) {

    //     const name = event.target.name;
    //     setState({ ...state, [name]: event.target.value })
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const words = state.search.split(' ');

    //     updateTaglines(words);
    // };

    // function handleClick() {
    //     updateTaglines([]);
    // }

    return (
        <Row>
            <Col s={12} m={8} offset='m2'>
                <Autocomplete 
                    id="searchField"
                    options={options}
                    placeholder="What's your question?"
                />
            </Col>
        </Row>
        // <form>
        //     <div className="input-field">
        //         <Row>
        //             <Col s={12} m={8} offset='m2'>
        //                 <TextInput className='search' name='search' placeholder="Search" noLayout onChange={handleChange} onClick={handleClick}/>
        //             </Col>
        //         </Row>
        //     </div>
        // </form>
    )
};

export default SearchForm;
