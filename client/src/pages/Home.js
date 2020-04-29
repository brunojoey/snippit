import React from "react";
import TinyMCE from "../components/TinyMCE";

function Home () {
    return (
        <div>
            <h1>Hello</h1>
            <form method="post">
                <TinyMCE />
            </form>
        </div>
    )
};

export default Home;