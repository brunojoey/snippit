import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { status, logout } from '../utils/API';
import { TinyMCE, Nav, Feed, Search } from "../components";
import { render } from 'react-dom';
function Home() {
    /* const [user, setUser] = useState({ status: false });
    useEffect(() => {
        async function fetchData() {
            let { data } = await status();
            setUser(data);
        }
        fetchData();
    }, []);
    // const logoutUser = () => {
    //   logout(); // from API 
    // }
    const renderBody = () => {
        if (user.status === false) {
            return <p>You are not logged in.</p>
        } else {
            return <p>You are logged in!</p>
        }
    }; */
    return (
        /* <>
             <h1>HOME PAGE</h1>
             {renderBody()}
             <Link to='/login'>Login Page</Link>
             <button type='button' onClick={() => logout()}>Logout</button>
             <form method="post">
                 <TinyMCE />
             </form>
         </> */
        <div>
            <Nav />
            <div className="row">
                <Search />
            </div>
            <div className="row">
                <form method="post">
                    <TinyMCE />
                </form>
            </div>
            <div className="row">
                <Feed />
            </div>
        </div>
    );
};
export default Home;



