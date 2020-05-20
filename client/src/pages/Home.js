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

    function renderForm() {
        return (
            <Row>
                <h4>
                    Post a Snip!
                </h4>
                <Col s={12} m={8} offset='m2'>
                    <Form setRedirect={setRedirect} isResponse={false} />
                </Col>
            </Row>
        );
    }

    return (
        <>
            {(redirect !== null) ? <Redirect push to={redirect} /> : <></>}
            <div className="container home-container">
                <Row>
                    <Col s={12}>
                        <SearchForm />
                    </Col>
                </Row>
                {(status.status !== false) ? renderForm() : <></>}
                <Row>
                    <Col s={12} m={10} offset='m1'>
                        <Feed />
                    </Col>
                </Row>
            </div>
            <>
            <Foot />
            </>
        </>
    );
};
export default Home;



