import React from "react";
import { Navbar, Icon, Dropdown, Divider } from "react-materialize";

function NavDrop() {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/home">Snippit</a>}
            centerlogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <Dropdown
                id="Dropdown_6"
                options={{
                    alignment: 'right',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                }}
                trigger={<a href="#!"><Icon right>Image</Icon></a>}
                >
                <a href="#">
                    Profile
                </a>
                <a href="#">
                    Feed
                </a>
                <Divider />
                <a href="#">
                    Logout
                </a>
            </Dropdown>
        </Navbar>
    );
}

export default NavDrop;
