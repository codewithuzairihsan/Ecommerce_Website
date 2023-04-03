import React, {useState, useEffect} from "react";
import axios from 'axios'
import { Link, useParams } from "react-router-dom";
import { Rating } from "../components/Rating";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
} from "react-bootstrap";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([])
  
  
const fethProduct = ()=>{
    axios.get(`/products/${id}`).then((res)=>{

      setProduct(res.data)
    }).catch((err)=>{
      console.log("error from product details",err)
    })
}
 
 
useEffect(()=>{

    fethProduct()
// eslint-disable-next-line
  },[])

  return (
    <div>
        <Link to='/' className="btn btn-light">
            <i className="fa-solid fa-arrow-left"></i>
           &nbsp; Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : ${product.price}</ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroupItem>
            <Row>
              <Col>Status :</Col>
              <Col>
                {product.countInStock > 0 ? "In stock" : "out of stock"}
              </Col>
            </Row>
            <ListGroupItem>
              <ListGroupItem>
                <Button className="btn-block" type="button">
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroupItem>
          </ListGroupItem>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;