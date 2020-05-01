import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Icon, Dropdown, Divider } from "react-materialize";
import statusAPI from '../../utils/statusAPI';
import StatusContext from '../../utils/StatusContext';

function NavDrop() {
    const { status, updateStatus } = useContext(StatusContext);

    // useEffect(() => {
    //     console.log('USE-EFFECT STATUS: ', status);

    // }, [])

    async function handleLogout() {
        const { data } = await statusAPI.logout();
        console.log('DATA: ', data);
        updateStatus(data);
    }

    return (
        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo" href="/home">Snippit</a>}
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
                trigger={<img src={`${status.imageUrl}`} alt='User Icon' height='64'></img>}
            >
                <Link to='/user'>Profile</Link>
                <Link to='/home'>Feed</Link>
                <Divider />
                <Link to='/login' onClick={handleLogout}>Logout</Link>
            </Dropdown>
        </Navbar>
    );
}

export default NavDrop;
