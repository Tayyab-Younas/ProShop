import { Row , Col } from "react-bootstrap";
import { useEffect , useState } from "react";
import Product from "../components/Product";
import axios from 'axios';


const HomeScreens = () => {

  const [Products , SetProducts] = useState([]);

  useEffect(()=>{
     const FetchProduct = async ()=> {

      const { data } = await axios.get("/api/products");

      SetProducts(data);
     }

     FetchProduct();

  }, []);

  return (
    <>
        <h1>Lastes Products</h1>
      <Row>
        {Products.map((product)=>(
         <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
          <Product product={product}/>
        </Col>
        ))}

      </Row>
    </>
  )
}

export default HomeScreens
