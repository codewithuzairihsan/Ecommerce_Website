import React from "react";
import Product from "../products";
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
  const product = Product.find((p) => p._id === id);
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
