import { Badge, Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/UsersApiSlice";
import { logout } from "../slices/loginSlice";
import SearchBox from "./SearchBox";
import { clearCartItems } from "../slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.logIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(clearCartItems());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link className="text-decoration-none" to="/">
            <Navbar.Brand className="">ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <SearchBox />
              <Nav.Link as={Link} to={"/cart"} className="text-decoration-none">
                <FaShoppingCart />
                Cart
                {cartItems.length > 0 && (
                  <Badge pill bg="dark" style={{ marginLeft: "5px" }}>
                    {cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-decoration-none"
                >
                  <FaUser />
                  Sign In
                </Nav.Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Panel" id="adminmenu">
                  <NavDropdown.Item as={Link} to={"/admin/productlist"}>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/admin/userlist"}>
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/admin/orderlist"}>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
