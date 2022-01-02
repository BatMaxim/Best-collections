import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {useSelector} from "react-redux";
import LogInButton from "../LogInButton/LogInButton";
import LogOutButton from "../LogOutButton/LogOutButton";

const Header = () => {
    const uid = useSelector((state)=>state.user.uid);
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Best Collections</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                    </Nav>
                   <div>
                       {!uid ? <LogInButton /> : <LogOutButton />}

                   </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;