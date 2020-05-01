import React, {useState} from 'react';
import Select from 'react-materialize';

function searchLanguage() {
    const [option, setOption] = useState();

    const handleOption = (event) => {
        event.preventDefault();
        setOption(option);
        resetOptions();
    };

    const resetOptions = () => {
        setOption('');
    };

    const handleOnClick = (event) => {
        // set option variable
        const option = event.target.option;
        console.log(option);
        // filter all snips with the given option. Map the options then filter?

    };

    return (
        <Select
            id="Select-9"
            multiple={false}
            onChange={handleOnClick}
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
            value=""
        >
            <option onClick={handleOption}
                disabled
                value=""
            >
                Choose your option
            </option>
            <option value="1">
                HTML
            </option>
            <option value="2">
                CSS
            </option>
            <option value="3">
                Javascript
            </option>
            <option value="4">
                React
            </option>
            <option value="5">
                MySQL
            </option>
            <option value="6">
                Node JS
            </option>
            <option value="7">
                Ruby
            </option>
            <option value="8">
                Python
            </option>
            <option value="9">
                C##
            </option>
        </Select>
    )
};

export default searchLanguage;