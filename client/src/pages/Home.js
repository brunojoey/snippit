import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import Feed from '../components/Feed';
import SnipForm from '../components/SnipForm';
import Form from '../components/Form';
import StatusContext from '../utils/StatusContext';
import SearchForm from '../components/SearchForm';
import Foot from '../components/Footer';

function Home() {
    const { status } = useContext(StatusContext);
    const [redirect, setRedirect] = useState(null);

    
    function checkRedirect() {
        if (redirect) { return <Redirect to={redirect} /> };
    }

    function renderForm() {
        return (
            <Row>
                <Col s={12} m={8} offset='m2'>
                    {/* <SnipForm setRedirect={setRedirect}/> */}
                    <Form setRedirect={setRedirect} isResponse={false} />
                </Col>
            </Row>
        );
    }

    return (
        <>
            {checkRedirect()}
            <div className="container" id="home-container">
                <Row>
                    <Col s={12}>
                        <SearchForm />
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
        </>
    );
};
export default Home;



