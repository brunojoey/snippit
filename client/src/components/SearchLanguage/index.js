import React, { useContext } from 'react';
import { Select } from 'react-materialize';

function SearchLanguage(props) {

    return (
        <div>
            <label htmlFor="searchLanguage" />
            <Select
                id="Select-9"
                multiple={false}
                onChange={props.handleChange}
                name='language'
                options={{
                    classes: '',
                    dropdownOptions: {
                        alignment: 'left',
                        autoTrigger: true,
                        closeOnClick: true,
                        constrainWidth: true,
                        coverTrigger: true,
                        hover: false,
                        inDuration: 150,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 250
                    }
                }}
                >
                <option value=''>Language</option>
                <option value="javascript">JavaScript</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="python">Python</option>
            </Select>
        </div>
    )
};

export default SearchLanguage;
