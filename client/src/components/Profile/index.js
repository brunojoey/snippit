import React, { useState, useContext, useRef } from "react";
import { Row, Col } from 'react-materialize';
// import ProfileImage from '../Cloudinary/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import StatusContext from '../../utils/StatusContext';
import usersAPI from '../../utils/usersAPI';
import './style.css';

function ProfilePanel({ state, setState }) {
    const { status, updateStatus } = useContext(StatusContext);
    const [edit, setEdit] = useState(false);
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);

    const bioRef = useRef('');
    const githubRef = useRef('');
    const linkedinRef = useRef('');
    const imageRef = useRef('');
    
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
            console.log("FILE", file);
            setState({...state, imageUrl: file.url });
            console.log("FILE URL", file.url);
            setLoading(false);
            // await usersAPI.updateUser(state.id, { imageUrl: file.url });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        await usersAPI.updateUser(state.id, { biography: bioRef.current.value });
        await usersAPI.updateUser(state.id, { github: githubRef.current.value });
        console.log("STATE ID", state.id);
        const { data } = await usersAPI.updateUser(state.id, { linkedin: linkedinRef.current.value });
        console.log(data);

        setState({ ...state, biography: data.biography, github: data.github, linkedin: data.linkedin, imageUrl: data.image });
        setEdit(false);

        if (status && status._id === state.id) { updateStatus({ 
            ...status,
            biography: data.biography,
            github: data.github,
            linkedin: data.linkedin,
        }); }
    };

    return (
        <div style={{ marginTop: '24px' }}>
            <Row className='center'>
                <Col s={12} l={6} style={{ border: '1px solid black', borderRadius: '2px', padding: '8px' }}>
                    {(status.status !== false && status._id === state.id)
                    ?
                        <img src={state.imageUrl} alt='User Profile' style={{ borderRadius: '50%', width: '200px' }} />
                    :
                        <FontAwesomeIcon size='3x' icon={faUserCircle}></FontAwesomeIcon>
                    }
                    <h3>{state.username}'s Page</h3>
                    <div>
                        {(edit)
                            ?
                                <textarea ref={bioRef} id='edit-profile-bio' name='edit-profile-bio' placeholder='Edit Biography'></textarea>
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
                                <input ref={githubRef} id='edit-profile-github' name='edit-profile-github' type='text' placeholder='Github Username'></input>
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
                                    ref={linkedinRef} id='edit-profile-linkedin' name='edit-profile-linkedin' type='text' placeholder='LinkedIn Username'></input>
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
                                <button type='button' onClick={() => setEdit(!edit)}>
                                    {(edit) ? 'Cancel' : 'Edit'}
                                </button> 
                                {(edit) ? <button type='submit' onClick={handleSubmit}>Submit</button> : <></>}
                            </Row>
                        : <></> }
                </Col>
                <Col s={12} l={6}>
                    {(edit && status.status !== false && status._id === state.id)
                    ? 
                    <>
                        <h6>Upload Image</h6>                        
                        <input type='file' name='file' placeholder='Upload Image' onChange={uploadImage} />
                    </>
                    :
                        <></>
                    }
                </Col>
            </Row>
        </div>

    );
};

export default ProfilePanel;
