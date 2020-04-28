import React from "react";
import TinyMCE from "../components/TinyMCE";

function Home () {
    return (
        <div>
            <h1>Hello</h1>
            <form method="post">
                <textarea id="textArea">Hello World</textarea>
                <TinyMCE />
            </form>
        </div>
    )
};

export default Home;