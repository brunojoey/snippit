import React, { useEffect, useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';

import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
import Nav from '../components/nav';
import Feed from '../components/feed';
import Search from '../components/feed';

// import { render } from 'react-dom';

function Home(props) {
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
        <div>
            <div className="row">
                <Search></Search>
            </div>
            <div className="row">
                <form method="post">
                    <TinyMCE></TinyMCE>
                </form>
            </div>
            <div className="row">
                <Feed></Feed>
            </div>
        </div>
    );
};
export default Home;



