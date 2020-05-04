import React, { useContext } from 'react';
import { Row, Col } from 'react-materialize';
// import { Link, Redirect } from 'react-router-dom';

// import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
import Feed from '../components/Feed';
import Search from '../components/Search';
import SnipForm from '../components/SnipForm';
import StatusContext from '../utils/StatusContext';
import Foot from '../components/Footer';

// import { render } from 'react-dom';

function Home(props) {
    const { status } = useContext(StatusContext);

    function renderForm() {
        return (
            <Row>
                <Col s={12} m={8} offset='m2'>
                    <SnipForm />
                </Col>
            </Row>
        );
    }

    return (
        <div className="container" id="home-container">
            <Row>
                <Col s={12} m={6} offset='m3'>
                    <Search />
                </Col>
            </Row>
            {(status.status !== false) ? renderForm() : <></>}
            <Row>
                <Col s={12} m={8} offset='m2'>
                    <Feed />
                </Col>
            </Row>
            <Foot />
        </div>
    );
};
export default Home;



