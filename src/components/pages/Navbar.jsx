import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Eric Nguyen</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Post-Portfolio/">Home</Nav.Link>
            <Nav.Link href="/Post-Portfolio/projects">Projects</Nav.Link>
            <Nav.Link href="/Post-Portfolio/about">About me</Nav.Link>
            <Nav.Link href="/Post-Portfolio/contact">Contact</Nav.Link>
            <Nav.Link href="/Post-Portfolio/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
