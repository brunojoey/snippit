import React from "react";

function Feed(props) {
    useEffect(() => {
        // API call to see if user is logged in.
        async function fetchData() {
            console.log("Props: ", props)
            let { data } = await statusAPI.getSnips();
        }
    }, []);

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