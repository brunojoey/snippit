import React, { useState, useEffect } from "react";
import { TextInput } from "react-materialize";
import statusAPI from '../utils/statusAPI';

function Login() {
    const [user, setUser] = useState({ status: false });
    useEffect(() => {
        async function fetchData() {
            let { data } = await statusAPI.getStatus();
            setUser(data);
        }
        fetchData();
    }, []);
    
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