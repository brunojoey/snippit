import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import statusAPI from '../utils/statusAPI';
import TinyMCE from "../components/TinyMCE/";
import Nav from "../components/nav";
import Feed from "../components/feed";
import Search from "../components/search";

import { render } from 'react-dom';

function Home() {
    return (
        <div>
            <Nav></Nav>
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



