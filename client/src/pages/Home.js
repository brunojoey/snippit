import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import statusAPI from '../utils/statusAPI';
import TinyMCE from "../components/TinyMCE";
import { render } from 'react-dom';

function Home() {
    // const [user, setUser] = useState({ status: false });
    // useEffect(() => {
    //     async function fetchData() {
    //         console.log('HOME USE-EFFECT FETCH-DATA');
    //         let { data } = await statusAPI.getStatus();
    //         console.log('DATA: ', data);
    //         setUser(data);
    //     }
    //     fetchData();
    // }, []);

    const logoutUser = () => {
      statusAPI.logout(); // from API 
    }

    // const renderBody = () => {
    //     if (user.status === false) {
    //         return <p>You are not logged in.</p>
    //     } else {
    //         return <p>You are logged in!</p>
    //     }
    // };
    return (
        <>
            <h1>HOME PAGE</h1>
            {/* {renderBody()} */}
            <Link to='/login'>Login Page</Link>
            <button type='button' onClick={logoutUser}>Logout</button>
            <form method="post">
                <TinyMCE />
            </form>
        </>
    );
};
export default Home;



