/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../providers/Authprovider';
import { BsFillPersonDashFill, BsFillPersonFill } from "react-icons/bs";

const Header = () => {
    const { user, logout } = useContext(AuthContex)
    const handlelogout = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">ITALIAN FOOD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>HOME</Link>
                            <Link to='blog'>BLOG</Link>

                        </Nav>
                        <Nav>
                            {user &&
                               <BsFillPersonDashFill style={{ fontSize: "2rem" }}></BsFillPersonDashFill>
                            }

                            {user ?
                                <Link onClick={handlelogout}><Button variant="success">logout</Button></Link> :
                                <Link to='/login'><Button variant="success">login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;