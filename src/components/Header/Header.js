import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    //Log Out
    const logOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect sticky="top" expand="lg"  variant="light" >
            <Container>
                <Navbar.Brand className='text-info fw-bold fs-2 d-flex justify-content-center align-items-center ' as={Link} to="/">TO DO APP </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            user ?
                                <Nav>
                                    <Nav.Link style={{backgroundColor:'#0DCAF0'}} className='fw-bold btn  text-white' as={Link} active to="/add">Add Task</Nav.Link>
                                    <button onClick={logOut} style={{backgroundColor:'#0DCAF0'}} className=' fw-bold btn ms-2 text-white'>Log Out </button>
                                </Nav>
                                : <Nav.Link className=' btn fw-bold btn btn-info text-white' as={Link} active to="/login">Log In </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;