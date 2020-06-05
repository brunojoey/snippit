import React, { useRef, useContext } from 'react';
import { Modal, TextInput, Button, object } from 'react-materialize';
import ProfileImage from '../../Cloudinary';
import usersAPI from '../../../utils/usersAPI';
import StatusContext from '../../../utils/StatusContext';

function UserEdit({ state, setState }) {
    const { status, updateStatus } = useContext(StatusContext);
    const bioRef = useRef('');
    const githubRef = useRef('');
    const linkedinRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        await usersAPI.updateUser(state.id, { biography: bioRef.current.value });
        await usersAPI.updateUser(state.id, { github: githubRef.current.value });
        const { data } = await usersAPI.updateUser(state.id, { linkedin: linkedinRef.current.value });

        setState({ ...state, biography: data.biography, github: data.github, linkedin: data.linkedin });

        if (status && status._id === state.id) { updateStatus({ 
            ...status,
            biography: data.biography,
            github: data.github,
            linkedin: data.linkedin
        }); }
    };

    return (
        <Modal
            actions={[
                <> 
                    <Button modal='close' node='button'>Close</Button>
                    <Button onClick={handleSubmit}>Subtmi</Button>
                </>
            ]}
            bottomSheet={false}
            fixedFooter
            header="Edit Profile"
            id="Modal-0"
            open={false}
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button node="button">MODAL</Button>}
        >
                <TextInput
                    id="newBio"
                    label="Biography"
                    ref={bioRef}
                />
                <TextInput
                    id="newGithub"
                    label="Github"
                    ref={githubRef}
                />
                <TextInput
                    id="newLinkedin"
                    label="LinkedIn"
                    ref={linkedinRef}
                />
                {/* <ProfileImage /> */}
        </Modal>
    )
};

export default UserEdit;