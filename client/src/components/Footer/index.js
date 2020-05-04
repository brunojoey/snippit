import React from "react";
import { Footer } from 'react-materialize';
import './style.css';

function Foot() {
    return (
        <Footer
            className="footer"
            copyrights="Snippit &copy; 2020 The Snips."
            links={<ul><li><a className="grey-text text-lighten-3" href="https://github.com/brunojoey">Joey Bruno</a></li><li><a className="grey-text text-lighten-3" href="https://github.com/tkennedy118">Tyler Kennedy</a></li><li><a className="grey-text text-lighten-3" href="https://github.com/brandoncansler">Brandon Cansler</a></li></ul>}
            moreLinks={<a className="grey-text text-lighten-4 right" href="https://github.com/brunojoey/snippit">Project Repo</a>}
        >
            <h5 className="white-text">
                Snippit
            </h5>
            <p className="grey-text text-lighten-4">
                An app made for developers, by developers. 
            </p>
        </Footer>
    );
}

export default Foot;