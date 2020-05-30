import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Nav(props) {
  const path = props.path;

  return (
    <Navbar
      style={{ backgroundColor: '#084c61', paddingRight: '8px' }}
      alignLinks="right"
      brand={<a className="brand-logo" href="/home" style={{ color: '#ffc857' }}><span style={{ color: '#3d99ae' }}>{`</`}</span>Snippit<span style={{ color: '#3d99ae' }}>></span></a>}
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
          <Link to='/login' type='button' onClick={() => props.setPath('/login')} className='nav-btn-light'>
            <div className='nav-btn-text'>&#36;&#123;&#32;Login&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
      {(path !== '/login' && path !== '/signup')
        ? 
          <Link to='/signup' type='button' onClick={() => props.setPath('/signup')} className='nav-btn-light'>
            <div className='nav-btn-text'>&#36;&#123;&#32;Signup&#32;&#125;</div>
          </Link> 
        : 
          <></>
        }
    </Navbar>
  );
}

export default Nav;