import logo from "./img/netflix_logo.png"
import avatar from "./img/avatar.png"
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import "./CustomNavbar.css"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import React, { useState } from "react";

function CustomNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
    setShowSearch(false)
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  // placeholder in base alla pagina corrente
  const getPlaceholder = () => {
    if (location.pathname.includes("/Tv-Shows")) {
      return "Cerca Serie TV..."
    }
    return "Cerca Film"
  }

  return (
    <Navbar bg="black" expand="lg" variant="dark">
      <Container fluid className="p-0">
        <Navbar.Brand href="#" className="p-0">
          <img src={logo} alt="Logo Netflix" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="custom-navbar-nav" />
        <Navbar.Collapse id="custom-navbar-nav">
          <Nav className="me-auto mb-2 mb-lg-0">
            <NavLink to="/" className="nav-link hover5">
              Home
            </NavLink>
            <NavLink to="/Tv-Shows" className="nav-link hover5">
              Tv Shows
            </NavLink>
            <NavLink to="/not-found" className="nav-link hover5">
              Movies
            </NavLink>
            <NavLink to="/not-found" className="nav-link hover5">
              Recently Added
            </NavLink>
            <NavLink to="/not-found" className="nav-link hover5">
              My List
            </NavLink>
          </Nav>
          <Nav className="d-flex align-items-center flex-row">
            <div className="d-flex flex-row-reverse">
            <Nav.Link onClick={toggleSearch} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </Nav.Link>
            {showSearch && (
              <Form className="d-flex" onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder={getPlaceholder()}
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Button variant="outline-danger" type="submit">Cerca</Button>
              </Form>
            )}
            </div>
            <div className="ms-3 ms-md-0">
              <Nav.Link href="#KIDS" className="text-white">
                KIDS
              </Nav.Link>
            </div>
            <div className="ms-3 ms-md-0">
              <Nav.Link href="#Campanellina" className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                </svg>
              </Nav.Link>
            </div>
            <div className="ms-3 ms-md-0 me-3">
              <NavDropdown
                title={<img src={avatar} alt="Immagine Profilo" height="30" />}
                id="basic-nav-dropdown"
                className=""
                drop="down"
                menuVariant="dark"
              >
                <NavDropdown.Item onClick={() => navigate("/Profile")} className="hover">
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/Settings")} className="hover">
                  Impostazioni
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/")} className="hover">
                  Home
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
