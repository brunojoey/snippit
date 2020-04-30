import React from "react";
// import { } from "react-materialize";
import ProfileImage from './Cloudinary/index';

function ProfilePanel() {
    return (
        <div className="row">
            <div className="col s4">
                <ProfileImage />
            </div>
            <div className="col s8">
                <h3>User</h3>
            </div>
        </div>
    );
}

export default ProfilePanel;