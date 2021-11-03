import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const HeaderMenu = () => {
    const { user, userSignOut } = useAuth();

    const handleSignOut = () => {
        userSignOut();
    }
    return (
        <div>

            <Navbar expand="lg" className="header-menu py-4">
                <Container>
                    <Navbar.Brand as={Link} to='/' className="text-white fw-bold">Ummah Food Delivery</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/home' className="text-white fw-bold">Home</Nav.Link>

                            {user.email ?
                                <>
                                    <Nav.Link as={Link} to='/add-item' className="text-white fw-bold">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to='/order' className="text-white fw-bold">My Order</Nav.Link>
                                    <Nav.Link as={Link} to='/manage-order' className="text-white fw-bold">Manage Order</Nav.Link>
                                    <p className="mb-0">
                                        <span className="text-white me-1">{user.displayName}</span>
                                        <button onClick={handleSignOut}>Log out</button>
                                    </p>
                                </>
                                : <Nav.Link as={Link} to='/login' className="text-white fw-bold">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderMenu;