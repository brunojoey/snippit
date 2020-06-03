import React, { useRef } from 'react';
import { Modal, TextInput, Button } from 'react-materialize';
import usersAPI from '../../../utils/usersAPI';
import ProfileImage from '../../Cloudinary';

function UserEdit({ setBiography, setLinkedin, setGithub }) {
    // const bioRef = useRef('');
    // const githubRef = useRef('');
    // const linkedinRef = useRef('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const biography = bioRef.current.value;
    //     const github = githubRef.current.value;
    //     const linkedin = linkedinRef.current.value;
    //     await usersAPI.updateUser(status._id, { biography });
    //     await usersAPI.updateUser(status._id,{ linkedin });
    //     const { data } = await usersAPI.updateUser(status._id, { github });
    //     console.log("DATA", data);
    // };

    return (
        <Modal
            actions={[
                <> <Button flat modal="close" node="button" waves="green">Close</Button>
                <Button flat >Submit Changes</Button> </>
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
            trigger={<Button node="button">Edit</Button>}
        >
                <TextInput
                    id="newBio"
                    label="Biography"
                    // ref={bioRef}
                />
                <TextInput
                    id="newGithub"
                    label="Github"
                    // ref={githubRef}
                />
                <TextInput
                    id="newLinkedin"
                    label="LinkedIn"
                    // ref={linkedinRef}
                />
                {/* <ProfileImage /> */}
        </Modal>
    )
};

export default UserEdit;