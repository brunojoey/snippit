import React from "react";
import { Feed, ProfilePanel, NavDrop } from "../components";

function ProfilePage() {
    return (
        <div>
            <NavDrop />
            <ProfilePanel />
            <div className="row">
                <Feed />
            </div>
        </div>
    );
}

export default ProfilePage;