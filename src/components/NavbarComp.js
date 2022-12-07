import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';
import {Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';




import './NavbarComp.css';


const NavbarComp = () => {

 
    let user = JSON.parse(localStorage.getItem('user'));
    const [username, setUsername] = useState(JSON.parse(localStorage.getItem('user')));


  

    const {id} = useParams();
        const [detail, setDetail] = useState([]);


        useEffect(function (id) {
            const getDetails = async () => {
                const response = await fetch(`http://localhost:1337/products/${id}`);
                setDetail(await response.json());
                console.log(response);
            };
            getDetails();
        }, []);





    const history = useHistory();

   

    function logOut() {
        localStorage.clear();
        history.push('/Login');
        setUsername('');
    }

    

    const [showCanvas, setShowCanvas] = useState(false);
    const handleCloseCanvas = () => setShowCanvas(false);
    const handleShowCanvas = () => setShowCanvas(true);

    


    return (

            <div>
                <Navbar
                    collapseOnSelect="collapseOnSelect"
                    expand="lg"
                    bg="dark"
                    variant="dark" className="px-4">
                    <NavLink className="navbar-brand" to="/">Dog Shop</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {
                                username ?
                                <>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                            <NavLink className="nav-link" to="/AddProducts">Add</NavLink>
                                </>   
                                :
                                <>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/products">Products</NavLink>
                                </>
                            }
                        </Nav>
                        <Nav>
                            { 
                                username ? 
                            <>
                            <Nav.Link onClick={handleShowCanvas}>Cart</Nav.Link>
                            <NavLink className="nav-link active fw-bold" to="#">{user && user.username}</NavLink>
                            <Nav.Link className="nav-link btn btn-primary text-white" onClick={logOut}>Logout</Nav.Link>
                            </>
                            : 
                            <>
                            <Nav.Link onClick={handleShowCanvas}>Cart</Nav.Link>
                            <NavLink className="nav-link" to="/Login">Login</NavLink>
                            <NavLink className="nav-link" to="/Register">Register</NavLink>                            
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                
                

            


      <Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
        <Offcanvas.Header className="mb-2">
            <button onClick={handleCloseCanvas} type="button" class="btn-close" aria-label="Close"></button>
          <Offcanvas.Title className="ml-3 mr-3 mt-3" key={detail.id}>
              <span className="text-primary align-items-center m-3">cart items</span>
              <span className="text-white rounded-circle bg-primary badge align-items-center m-2">3</span>
              </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="mt-2 border d-flex justify-content-between">
            <Container className="p-3 mt-4 mb-4">
                    <ul className="list-group">
                        <li className="list-group-item p-4 d-flex justify-content-between">
                            <div>
                                <h6 className="my-0">{detail.title}</h6>
                                <small className="text-muted">{detail.description}</small>
                                <NavLink to={`/products/${detail.id}`} className=""></NavLink>
                            </div>
                            <div>
                            <h6 className="my-0 px-2">{detail.price}</h6>  
                            <span className="px-1">+</span>
                            <small className="text-white rounded-pill bg-primary badge">1</small>
                            <span className="px-1">-</span>
                            </div>
                        </li>
                    </ul>
            </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
 
    );
}



export default NavbarComp;