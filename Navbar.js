import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as Navbarbs } from "react-bootstrap";
import { useContext } from "react";
import AuthContext from "./Auth/AuthContext";
export function Navbar() {
  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.IsLoggedIn;
  const logoutHandler = () => {
    AuthCtx.logout();
  };

  return (
    <Navbarbs sticky="top" className="bg-secondary shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/homepage" as={NavLink}>
            Homepage
          </Nav.Link>
          <Nav.Link to="/login" as={NavLink}>
          <Nav.Link to="/signup" as={NavLink}>
              {isLoggedIn ? "Signup" : "Login"}
            </Nav.Link>
          </Nav.Link>

          {isLoggedIn && (
            <Nav.Link to="logout" as={NavLink} onClick={logoutHandler}>
              Logout
            </Nav.Link>
          )}
          
        </Nav>
      </Container>
    </Navbarbs>
  );
}
