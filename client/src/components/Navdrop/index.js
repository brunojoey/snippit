import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Dropdown, Divider } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';
import './style.css';

function NavDrop(props) {
    console.log('SIZE: ', props.size);
    const { status, updateStatus } = useContext(StatusContext);

    async function handleLogout() {
        const { data } = await statusAPI.logout();

        updateStatus(data);
        props.setPath('/home');
    }

    return (
        <Navbar
            style={{ backgroundColor: '#084c61' }}
            alignLinks="right"
            brand={<a className="brand-logo" href="/home" style={{ color: '#ffc857' }}><span style={{ color: '#3d99ae' }}>{`</`}</span>Snippit<span style={{ color: '#3d99ae' }}>></span></a>}
            centerLogo
            id="mobile-nav"
            menuIcon={<FontAwesomeIcon className='v-align' size='2x' icon={faBars}></FontAwesomeIcon>}
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
            {(props.size.width > 992)
                ?
                    <Dropdown
                        id="nav-dropdown"
                        options={{
                            alignment: null,
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: false,
                            container: null,
                            coverTrigger: false,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }}
                        trigger={
                            <button className='nav-btn-light nav-btn-dropdown'>
                                {(status.imageUrl)
                                    ?
                                    <><img src={`${status.imageUrl}`} alt='User Icon' className='nav-user-icon' /><div className='nav-username'>{status.username}</div></>
                                    :
                                    <><FontAwesomeIcon size='3x' className='nav-user-fa-icon' icon={faUserCircle}></FontAwesomeIcon><div className='nav-username-fa'>{status.username}</div></>
                                }                       
                            </button>
                        }
                    >
                        <Link to={`/users/${status._id}`}>Profile</Link>
                        <Link to='/home'>Home</Link>
                        <Link to='/editor'>Editor</Link>
                        <Divider />
                        <Link to='/home' onClick={handleLogout}>Logout</Link>
                    </Dropdown>
                :
                    <>
                        <div className='nav-btn-light nav-btn-dropdown'>
                                {(status.imageUrl)
                                    ?
                                    <><img src={`${status.imageUrl}`} alt='User Icon' className='nav-user-icon' /><div className='nav-username'>{status.username}</div></>
                                    :
                                    <><FontAwesomeIcon size='3x' className='nav-user-fa-icon' icon={faUserCircle}></FontAwesomeIcon><div className='nav-username-fa'>{status.username}</div></>
                                }                       
                        </div>
                        <Link to={`/users/${status._id}`} className='sidenav-btn'>Profile</Link>
                        <Link to='/home' className='sidenav-btn'>Home</Link>
                        <Link to='/editor' className='sidenav-btn'>Editor</Link>
                        <Divider />
                        <Link to='/home' onClick={handleLogout} className='sidenav-btn'>Logout</Link>
                    </>
            }
        </Navbar>
    );
}

export default NavDrop;

// {/* <img src={`${status.imageUrl}`} alt='User Icon' height='50' className='circle'></img> */}
// <span className="fa fa-caret-down"></span>
// <i className-"fa fa-caret-down"