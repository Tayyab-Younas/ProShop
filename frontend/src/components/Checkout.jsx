import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Checkout = ({step1, step2, step3, step4}) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <Nav.Link as={Link} to="/login" className='text-black'>
            Sign In
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Nav.Link as={Link} to="/shipping" className='text-black'>
            Shipping
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Shipping</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Nav.Link as={Link} to="/payment" className='text-black'>
            Payment
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Payment</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <Nav.Link as={Link} to="/placeorder" className='text-black'>
            Place Order
          </Nav.Link>
        ) : (
          <Nav.Link disabled>Place Order</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default Checkout;
