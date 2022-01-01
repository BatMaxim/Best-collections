import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import LogInButton from "../LogInButton/LogInButton";
import LogOutButton from "../LogOutButton/LogOutButton";

const Header = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Best Collections</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Nav.Link href="#">Users</Nav.Link>
                    </Nav>
                   <div>
                       <LogInButton />
                       <LogOutButton />
                   </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;