import React from "react";
import { TextInput } from "react-materialize";

function Login() {
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
        </form>
    );
}

export default Login;