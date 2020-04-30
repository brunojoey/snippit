import React, { useEffect, useState } from 'react';
// import { Link, Redirect } from 'react-router-dom';

<<<<<<< HEAD
// import statusAPI from '../utils/statusAPI';
import TinyMCE from "../components/TinyMCE";
import { Nav, Feed, Search } from "../components";
=======
import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
import Nav from '../components/nav';
import Feed from '../components/feed';
import Search from '../components/feed';
>>>>>>> 5fe2c62dd4336c1a5d5ae28839cb584d074d455a

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



