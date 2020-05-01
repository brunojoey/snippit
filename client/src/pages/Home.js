import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-materialize';
// import { Link, Redirect } from 'react-router-dom';

// import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
import Feed from '../components/Feed';
// import Search from '../components/search';

// import { render } from 'react-dom';

function Home(props) {

    return (
        <div className="container">
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <h4>hello</h4>
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



