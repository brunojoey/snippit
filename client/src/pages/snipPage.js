import React, { useEffect } from 'react';
import TinyMCE from "../components/TinyMCE";
import snipsAPI from "../utils/snipsAPI";
import NavDrop from "../components/navdrop";

function Snip(props) {
  console.log("Props: ", props);
  useEffect(() => {
    const { data } = snipsAPI.getSnip()
  }, )
  
  return (
    <div>
      <div className="row">
        <p>
          this is a snip
        </p>
      </div>
      <div className="row">
        <form method="post">
          <TinyMCE></TinyMCE>
        </form>
      </div>
    </div>
  );
}

export default Snip;
