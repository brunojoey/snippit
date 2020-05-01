import React, { useEffect, useState } from 'react';
import TinyMCE from '../components/TinyMCE';
import Feed from '../components/Feed';
// import Search from '../components/search';

// import { render } from 'react-dom';

function Home(props) {

    return (
        /* <>
             <h1>HOME PAGE</h1>
             {renderBody()}
             <Link to='/login'>Login Page</Link>
             <button type='button' onClick={() => logout()}>Logout</button>
             <form method="post">
                 <TinyMCE />
             </form>
         </> */
        <div>
            <div className="row">
                {/* <Search></Search> */}
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



