import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';

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
          <Link to='/login' type='button' className='btn-rounded red-btn' onClick={() => props.setPath('/login')} style={{ width: '108px' }}>
            <div style={{ textAlign: 'center', height: '36px', marginTop: '-16px' }}>$&#123;&#32;Login&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
      {(path !== '/login' && path !== '/signup')
        ? 
          <Link to='/signup' type='button' onClick={() => props.setPath('/signup')} className='btn-rounded red-btn' style={{ width: '108px' }}>
            <div style={{ textAlign: 'center', height: '36px', marginTop: '-16px' }}>$&#123;&#32;Signup&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
    </Navbar>
  );
}

export default Nav;