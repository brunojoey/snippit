import React from "react";
import { TextInput } from "react-materialize";

function SignUp() {
    return (
        <form>
            <TextInput
                id="TextInput-4"
                label="Username"
            />
            <TextInput
                id="TextInput-4"
                label="Password"
            />
            <TextInput
                id="TextInput-4"
                label="Email"
            />
        </form>
    );
}

export default SignUp;