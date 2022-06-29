import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './component/estilos.css'
import img from './img/codplay.jpg'
import img2 from './img/cristian.jpg'
import img3 from './img/rock.jpg'
function App() {
  return (
    <html>
      <head>
      <title>MUSIC</title>  
      </head>
      <body>
        <header>
    <div className='col-9 ml-9'>
    <Navbar expand="lg nav">
      <Container fluid className="direc">
        <Navbar.Brand href="#"className="text-white">MUSIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">PLAYLISTS</Nav.Link>
            <Nav.Link href="#action2" className="text-white">HOME</Nav.Link>
            
          </Nav>
          <h1 style={{ marginTop:'-75px', marginLeft:'-235px', }}>BROWSE</h1>
          <Form className="d-flex header">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: '50px', width:'190px', height:'25px',}}
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </header>
    <article className="luna">
      <div className="d-flex img">
        <img src={ img } className="foto" />
        <img src={ img2 } className="foto" style={{ marginLeft:'12px', }}/>
        <img src={ img3 } className="foto" style={{ marginLeft:'12px', }}/>
        <img src={ img } className="foto"  style={{ marginLeft:'12px', }}/>
      </div>
      <div className="d-flex img2">
        <img src={ img } className="foto" />
        <img src={ img2 } className="foto" style={{ marginLeft:'12px', }}/>
        <img src={ img3 } className="foto" style={{ marginLeft:'12px', }}/>
        <img src={ img } className="foto"  style={{ marginLeft:'12px', }}/>
      </div>
      </article>
    <section className='section'>
      <div className="losa">
     <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Browse</a><p/>
     <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Radio</a><p/>
     </div>
     <div className='cuerpo'>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>YOUR LIBRARY</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Recently Played</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Song</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Albums</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Artists</a><p/>
     </div>
     <div className='rosa'>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>PLAYLISTS</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Discober Weekly</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Full Rock chill</a><p/>
      <a href="#" style={{ textDecoration: 'none', color: 'white', }}>Soul</a><p/>
     </div>

    </section>
    </body>
    </html>
  );
}

export default App;
