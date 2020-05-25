import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Icon, NavItem, Button } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(props) {
  const path = props.path;

  return (
    <Navbar
      alignLinks="right"
      brand={<a className="brand-logo" href="/home"><span>{`</`}</span>Snippit<span>></span></a>}
      centerLogo
      // id="mobile-nav"
      menuIcon={<FontAwesomeIcon className='v-align' size='2x' icon={faBars}></FontAwesomeIcon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 100,
        outDuration: 100,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        preventScrolling: true
      }}
    >
      {(path !== '/login' && path !== '/signup') 
        ?
          <Link to='/login' type='button' onClick={() => props.setPath('/login')} className='red-btn nav-btn'>
            <div className='nav-btn-text'>$&#123;&#32;Login&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
      {(path !== '/login' && path !== '/signup')
        ? 
          <Link to='/signup' type='button' onClick={() => props.setPath('/signup')} className='red-btn nav-btn'>
            <div className='nav-btn-text'>$&#123;&#32;Signup&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
    </Navbar>
  );
}

export default Nav;