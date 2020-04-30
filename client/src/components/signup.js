import React from "react";
import { TextInput } from "react-materialize";

function SignUp() {
    return (
        <div>
            <h3>
                Sign-up
            </h3>
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
        </div>
    );
}

export default SignUp;