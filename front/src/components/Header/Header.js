import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"
import {useSelector} from "react-redux";
import LogInButton from "../LogInButton/LogInButton";
import LogOutButton from "../LogOutButton/LogOutButton";

const Header = () => {
    const {uid, admin} = useSelector((state)=>state.user);
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Best Collections</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {uid ? <Nav className="me-auto">
                        <LinkContainer to="/profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>
                        {admin && <LinkContainer to="/users">
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>}
                    </Nav>:
                        <Nav className="me-auto">

                        </Nav>}
                   <div>
                       {!uid ? <LogInButton /> : <LogOutButton />}

                   </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;