import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Icon, Dropdown, Divider } from "react-materialize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';
import './style.css';

function NavDrop(props) {
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
                    <button className='btn-rounded-light' style={{ width: 'auto', height: '36px', borderRadius: '36px' }}>
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
                <Link to='/home'>Feed</Link>
                <Link to='/editor'>Editor</Link>

                <Divider />
                <Link to='/home' onClick={handleLogout}>Logout</Link>
            </Dropdown>
        </Navbar>
    );
}

export default NavDrop;

// {/* <img src={`${status.imageUrl}`} alt='User Icon' height='50' className='circle'></img> */}
// <span className="fa fa-caret-down"></span>
// <i className-"fa fa-caret-down"