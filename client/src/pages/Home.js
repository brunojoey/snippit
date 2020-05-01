import React, { useContext } from 'react';
import { Row, Col } from 'react-materialize';
// import { Link, Redirect } from 'react-router-dom';

// import statusAPI from '../utils/statusAPI';
import TinyMCE from '../components/TinyMCE';
import Feed from '../components/Feed';
import SnipForm from '../components/SnipForm';
import StatusContext from '../utils/StatusContext';

// import Search from '../components/search';

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
        <div className="container">
            <Row>
                <Col s={12} m={6} offset='m3'>
                    {/* <Search /> */}
                </Col>
            </Row>
            {(status.status !== false) ? renderForm() : <></>}
            <Row>
                <Col s={12} m={8} offset='m2'>
                    <Feed />
                </Col>
            </Row>
        </div>
    );
};
export default Home;



