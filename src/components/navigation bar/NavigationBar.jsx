import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'react-router-dom';

export default function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">Ori-Game</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">AnaSayfa</Nav.Link>
                            <Nav.Link href="#pricing">İletişim</Nav.Link>
                            <NavDropdown title="Ürünlerimiz" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4">Koleksiyonumuz</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">Ürün-1</NavDropdown.Item>
                                <NavDropdown.Item href="#">Ürün-2</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Hakkımızda</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                İstedikleriniz
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
