import React, { useState, useContext, useRef } from "react";
import { Row, Col } from 'react-materialize';
import ProfileImage from '../Cloudinary/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import StatusContext from '../../utils/StatusContext';
import usersAPI from '../../utils/usersAPI';
import './style.css';

function ProfilePanel({ state, setState }) {
    const { status, updateStatus } = useContext(StatusContext);
    const [edit, setEdit] = useState(false);

    const bioRef = useRef('');
    const githubRef = useRef('');
    const linkedinRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await usersAPI.updateUser(state.id, { biography: bioRef.current.value });
        await usersAPI.updateUser(state.id, { github: githubRef.current.value });
        const { data } = await usersAPI.updateUser(state.id, { linkedin: linkedinRef.current.value });

        setState({ ...state, biography: data.biography, github: data.github, linkedin: data.linkedin });
        setEdit(false);

        if (status && status._id === state.id) { updateStatus({ 
            ...status,
            biography: data.biography,
            github: data.github,
            linkedin: data.linkedin
        }); }
    };

    return (
        <div style={{ marginTop: '24px' }}>
            <Row className='center'>
                <Col s={12} l={6}>
                    {(state.imageUrl) 
                        ?
                            <img src={state.imageUrl} alt='User Profile' style={{ borderRadius: '50%' }} />
                        :
                            <FontAwesomeIcon size='3x' icon={faUserCircle}></FontAwesomeIcon>
                    }
                </Col>
                <Col s={12} l={6} style={{ border: '1px solid black', borderRadius: '2px', padding: '8px' }}>
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
                                        ?<p><a href={`https://www.linkedin.com/${state.linkedin}`} target='_blank' rel='noopener noreferrer'>My LinkedIn</a></p>
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
            </Row>
        </div>

    );
};

export default ProfilePanel;
