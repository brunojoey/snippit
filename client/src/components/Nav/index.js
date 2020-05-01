import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';

function Nav() {

  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="/home">Snippit</a>}
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
      <NavItem href='/login'>login | sign-up</NavItem>
    </Navbar>
  );
}

export default Nav;