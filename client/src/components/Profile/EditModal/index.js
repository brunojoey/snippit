import React from 'react';
import { Modal, TextInput, Button, object } from 'react-materialize';

function UserEdit() {
    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
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
            root={[object, HTMLBodyElement]}
            trigger={<Button node="button">Edit</Button>}
        >
            <TextInput
                id="TextInput-4"
                label="Username"
            />
            <TextInput
                id="TextInput-4"
                label="Biography"
            />
            <TextInput
                id="TextInput-4"
                label="Github"
            />
            <TextInput
                id="TextInput-4"
                label="LinkedIn"
            />
        </Modal>
    )
};

export default UserEdit;