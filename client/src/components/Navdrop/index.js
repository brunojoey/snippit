import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Icon, Dropdown, Divider, Chip } from "react-materialize";
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';

function NavDrop() {
    const { status, updateStatus } = useContext(StatusContext);

    async function handleLogout() {
        const { data } = await statusAPI.logout();
        updateStatus(data);
    }

    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/home"> Snippit</a>}
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
                id="dropdown"
                options={{
                    alignment: 'left',
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
                trigger={<span className="fa fa-caret-down"><img src={`${status.imageUrl}`} alt='User Icon' height='50' className='circle'></img></span>}
            >
                <Link to={`/user/${status._id}`}>Profile</Link>
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