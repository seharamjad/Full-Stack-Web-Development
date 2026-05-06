// import { Navbar, Nav, Container, Button } from "react-bootstrap";



import { Link, useLocation } from 'react-router';
import { Navbar, Nav, Container } from 'react-bootstrap'

const AppNavbar = () => {
    //use to set the location/path
    const { pathname } = useLocation();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Student Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" active={pathname === '/'}>All Students</Nav.Link>
                        <Nav.Link as={Link} to="/add-student" active={pathname === '/add-student'}>Add Student</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;