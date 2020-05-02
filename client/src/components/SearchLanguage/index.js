import React, {useContext} from 'react';
import Select from 'react-materialize';
import LanguageContext from '../../utils/LanguageContext';

const {language, updateLanguage} = useContext(LanguageContext);
const handleLanguage = (event) => {
    event.preventDefault();
    const option = event.target.language;
    console.log('OPTION: ', option);
    updateLanguage(option);
    resetLanguage();
};

const resetLanguage = () => {
    updateLanguage('');
};

function SearchLanguage() {
    return (
        <Select
            id="Select-9"
            multiple={false}
            onChange={function noRefCheck(){}}
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
            <option onClick={handleLanguage}
                disabled
                value={language}
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

export default SearchLanguage;