import React, { useContext } from 'react';
import { Select } from 'react-materialize';
import LanguageContext from '../../utils/LanguageContext';

function SearchLanguage() {
    const { language, updateLanguage } = useContext(LanguageContext);
    function handleLanguage(event) {
        // event.preventDefault();
        const option = event.currentTarget.language;
        console.log('OPTION: ', option);
        updateLanguage(option);
        resetLanguage();
    };

    function resetLanguage() {
        updateLanguage('javascript');
    };

    // const { status } = useContext(StatusContext);
    // const [state, setState] = useState({
    //   tagLine: '',
    //   language: 'javascript',
    //   body: '',
    //   userId: '',
    // });
  
    // useEffect(() => {
    //   setState({ ...state, userId: status._id });
    // }, [status])
  
    // function handleChange(event) {
    //   const name = event.target.name;
    //   setState({ ...state, [name]: event.target.value })
    // }
    
    // async function handleSubmit(event) {
    //   event.preventDefault();
    //   snipsAPI.getSnip(state);
    // }

    return (
        <div>
            <input id="searchLanguage" type="searchLanguage" required />
            <label htmlFor="searchLanguage" />
            <Select
                id="Select-9"
                multiple={false}
                onChange={resetLanguage}
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
                <option value="javascript" onClick={handleLanguage}>JavaScript</option>
                <option value="html" onClick={handleLanguage}>HTML</option>
                <option value="css" onClick={handleLanguage}>CSS</option>
                <option value="python" onClick={handleLanguage}>Python</option>
            </Select>
        </div>
    );
}

export default SearchLanguage;
