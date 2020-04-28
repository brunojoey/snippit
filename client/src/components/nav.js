import React from "react";
import { Navbar, Icon, NavItem } from "react-materialize";

function Nav() {
    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="#">Snippit</a>}
            centerLogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            >
            <NavItem href="login.html">
                Login/Sign-Up
            </NavItem>
        </Navbar>
    );
}

export default Nav;