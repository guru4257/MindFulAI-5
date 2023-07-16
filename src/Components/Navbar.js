import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css"
import { LogOut } from "../Services/getRequest";

const MainNavbar = () => {


    // logic for logOut
    const navigate = useNavigate();
    const  logOut = ()=>{

        LogOut().then((res)=>{

            if(res.data.Success){
                sessionStorage.removeItem('isAuth');
                sessionStorage.removeItem('userType');
                sessionStorage.removeItem('username');
                navigate('/');
            }
            else{
                window.alert(res.data.Message);

            }
        }).catch((err)=>{
            window.alert(err.response.data.Message);
        })
    }
  return (
    <Navbar collapseOnSelect expand="lg"  style={{backgroundColor:"#3796DF"}}data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "white", fontSize: "25px",fontFamily:"sans-serif" }}
        >  
          {/* <img src="createLogo2.png" alt="LOGO"></img> */}
          <strong>IDEA'S</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="me">
            <Nav.Link as={Link} to="/" className="navLink" active>
              <strong>HOME</strong>
            </Nav.Link>
            {sessionStorage.getItem('isAuth')===null && (
                <Nav.Link as={Link} to="/explore" className="navLink" active>
                <strong>EXPLORE</strong>
               </Nav.Link>
            )}
            {
                sessionStorage.getItem('isAuth')===true && sessionStorage.getItem('userType') === 'ProblemSolver' && (
                  <Nav.Link as={Link} to="/addSolutions" className="navLink" active>
                    <strong>ADD SOLUTIONS</strong>
                  </Nav.Link>
               
                )
            }
            {!sessionStorage.getItem('isAuth') && (
                <Nav.Link as={Link} to="/login" className="navLink" active>
                <strong>LOGIN</strong>
              </Nav.Link>
            )}
            {
                sessionStorage.getItem('isAuth')===true ? (
                    <Nav.Link as={Link} to="/" className="navLink" active>
                    <Button variant="none" onClick={logOut} style={{backgroundColor:"white",color:"black"}} size="sm"><strong>LOG OUT</strong></Button>
                    </Nav.Link>
                ):(
                    <Nav.Link as={Link} to="/register" className="navLink" active>
                    <Button variant="none" style={{backgroundColor:"white",color:"black"}} size="sm"><strong>SIGNUP</strong></Button>
                    </Nav.Link>
                )
            }
            
            {sessionStorage.getItem('isAuth') && (
                <Nav.Link as={Link} to="/profile" className="navLink" style={{marginRight:"2%"}} active>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
             
            </Nav.Link>
            )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
