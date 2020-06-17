import React, { useState, useContext, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import Loader from 'react-loader-spinner';
import Feed from '../Feed';
// import ProfileImage from '../Cloudinary/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { languages } from '../../utils/languages';
import StatusContext from '../../utils/StatusContext';
import usersAPI from '../../utils/usersAPI';
import snipsAPI from '../../utils/snipsAPI'; 
import './style.css';

function ProfilePanel({ state, setState }) {
    const { status, updateStatus } = useContext(StatusContext);
    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [filterData, setFitlerData] = useState(null);

    const bioRef = useRef('');
    const githubRef = useRef('');
    const linkedinRef = useRef('');
    
    const uploadImage = async (event) => {
        event.preventDefault();
        const files = event.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'snippit');
        setLoading(true);

        const response = await fetch(
            'https://api.cloudinary.com/v1_1/dgirhzjvq/image/upload',
            {
                method: 'POST',
                body: data
            }
        );
            const file = await response.json();
            setState({...state, imageUrl: file.url });
            setLoading(false);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        await usersAPI.updateUser(state.id, { biography: bioRef.current.value });
        await usersAPI.updateUser(state.id, { github: githubRef.current.value });
        const { data } = await usersAPI.updateUser(state.id, { linkedin: linkedinRef.current.value });

        setState({ ...state, biography: data.biography, github: data.github, linkedin: data.linkedin, imageUrl: data.image });
        setEdit(false);

        if (status && status._id === state.id) { updateStatus({ 
            ...status,
            biography: data.biography,
            github: data.github,
            linkedin: data.linkedin,
        }); }
    };

    useEffect(() => {
        async function fetchData() {
            const { data } = await snipsAPI.getSnips();
            const filterData = data.filter(snip => snip.userId === state.id && !snip.isResponse);
            setFitlerData(filterData);
        };
        fetchData();
    });
    
    function renderSnips() {
        return (
            <div>
                {filterData.map((snip, index) => {
                    let language = languages.find(language => language.name === snip.language);
                    return (
                    <Row className='feed-item' key={index}>
                        <Col s={10} l={11} className='feed-item-link'>
                        <Link to={`/snips/${snip._id}`} style={{ color: '#8d99ae' }}>{snip.tagLine}</Link>
                        </Col>
                        <Col s={2} l={1}>
                        <div className='feed-item-language-icon'>{language.icon}</div>
                        </Col>
                    </Row>
                    );
                })}
            </div>
      );
    }
  

    return (
        <div style={{ marginTop: '24px' }}>
            <Row className='center'>
                <Col s={6} l={12} style={{ border: '1px solid #ffc857', borderRadius: '2px', padding: '8px' }}>
                    {(status.status !== false && status._id === state.id)
                    ?
                        <img src={state.imageUrl} alt='User Profile' style={{ borderRadius: '50%', width: '200px', border: '3px solid #ffc857' }} />
                    :
                        <FontAwesomeIcon size='3x' icon={faUserCircle}></FontAwesomeIcon>
                    }
                    <h3>{state.username}'s Page</h3>
                    <div>
                        {(edit)
                            ?
                                <textarea style={{border: '1px solid #ffc857', paddingLeft: '5px'}} ref={bioRef} id='edit-profile-bio' name='edit-profile-bio' placeholder='Edit Biography'></textarea>
                            :
                                <>
                                    {(state.biography) 
                                        ? <p>{state.biography}</p> 
                                        : <p>No biography information has been added. Please add a biography.</p> 
                                    }
                                </>
                        }
                    </div>
                    <div>
                        {(edit)
                            ?
                                <input 
                                    style={{border: '1px solid #ffc857', paddingLeft: '5px'}} ref={githubRef} id='edit-profile-github' name='edit-profile-github' type='text' placeholder='Github Username'></input>
                            :
                                <>
                                    {(state.github) 
                                        ? <p><a href={`https://www.github.com/${state.github}`} target='_blank' rel='noopener noreferrer'>My Github</a></p> 
                                        : <p>No Github information added. Please add Github. </p> 
                                    }
                                </>
                        }
                    </div>
                    <div>
                        {(edit)
                            ?
                                <input 
                                    ref={linkedinRef} style={{border: '1px solid #ffc857', paddingLeft: '5px'}} id='edit-profile-linkedin' name='edit-profile-linkedin' type='text' placeholder='LinkedIn Username'></input>
                            :
                                <>
                                    {(state.linkedin) 
                                        ?<p><a href={`https://www.linkedin.com/in/${state.linkedin}`} target='_blank' rel='noopener noreferrer'>My LinkedIn</a></p>
                                        : <p>No LinkedIn information added. Please add a LinkedIn.</p> 
                                    }
                                </>
                        }
                    </div>
                    {(status && status._id === state.id) 
                        ? 
                            <Row>
                                <button className='btn-rounded-light' type='button' onClick={() => setEdit(!edit)}>
                                    {(edit) ? 'Cancel' : 'Edit'}
                                </button> 
                                {(edit) ? <button className='btn-rounded-light' type='submit' onClick={handleSubmit}>Submit</button> : <></>}
                            </Row>
                        : <></> }
                </Col>
                <Col s={12} l={12}>
                    {(edit && status.status !== false && status._id === state.id)
                    ? 
                    <>
                        <h6><span>render</span><span style={{ color: '#ffc857', fontWeight: 'bold' }}>(profileImage);</span></h6>  
                        <label className='btn-rounded-light' style={{marginLeft: '115px', fontSize: '1.05em'}} for='file'>Choose File</label>                      
                        <input className='input-file' type='file' name='file' id='file' placeholder='Upload Image' onChange={uploadImage} />
                    </>
                    :
                        <></>
                    }
                </Col>
            </Row>
            <Row>
                <Col s={12} l={12}>
                {(state)
                ?
                    (filterData)
                    ?
                        renderSnips()
                    :
                    <p>User has no snips.</p>
                :   
                    <Loader />
                }
                </Col>
            </Row>
        </div>

    );
};

export default ProfilePanel;
