import React from "react";
import { NavDrop, Feed, TinyMCE } from "../components";

function FeedPage() {
    return (
        <div>
            <NavDrop />
            <div className="row">
                <form method="post">
                    <TinyMCE />
                </form>
            </div>
            <div className="row">
                <Feed />
            </div>
        </div>
    );
}

export default FeedPage;