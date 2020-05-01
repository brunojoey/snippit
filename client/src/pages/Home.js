import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
// import { Link, Redirect } from 'react-router-dom';

// import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
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
        <div className="container">
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <Search />
                </Col>
            </Row>
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <form method="post">
                        <TinyMCE></TinyMCE>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <Feed />
                </Col>
            </Row>
        </div>
    );
};
export default Home;



