import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';

function Nav() {
  const path = window.location.pathname;

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
      {(path !== '/login' && path !== '/signup') ? <Link to='/login' style={{ width: '72px' }}>Login</Link> : <></>}
      {(path !== '/login' && path !== '/signup')? <Link to='/signup' style={{ marginRight: '12px', width: '72px'}}>Signup</Link> : <></>}
    </Navbar>
  );
}

export default Nav;