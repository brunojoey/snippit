import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon } from 'react-materialize';

function Nav(props) {
  const path = props.path;

  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="/home"><span>{`</`}</span>Snippit<span>></span></a>}
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
      {(path !== '/login' && path !== '/signup') 
        ? 
          <Link to='/login' style={{ width: '72px' }} onClick={() => props.setPath('/login')}>Login</Link> 
        : 
          <></>
        }
      {(path !== '/login' && path !== '/signup')
        ? 
          <Link to='/signup' style={{ marginRight: '12px', width: '72px'}} onClick={() => props.setPath('/signup')}>Signup</Link> 
        : 
          <></>
        }
    </Navbar>
  );
}

export default Nav;