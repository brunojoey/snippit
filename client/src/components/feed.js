import React from "react";

function Feed() {
    return (
        /* for each snip, return as an ul/li */
        <ul>
            <li>
                <h5>
                    Hello
                    {/* {this.user.username}
                    <img href={this.user.image} /> */}
                </h5>
                    {/* <p>
                        {this.user.snip}
                    </p> */}
            </li>
        </ul>
    );
}

export default Feed;