import React from 'react';
import { Select } from 'react-materialize';

function Selector() {
    return (
        <Select
            id="Select-9"
            label="Choose your language"
            multiple={false}
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
            value="2"
            >
            <option value="1">
                JavaScript
            </option>
            <option value="2">
                HTML
            </option>
            <option value="3">
                CSS
            </option>
        </Select>
    );
}

export default Selector;