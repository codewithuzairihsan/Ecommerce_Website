import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Row, Col } from 'react-bootstrap';
import ProductScreen from './ProductScreen'
const HomeScreen =()=> {
  const [Products, setProducts] = useState([]);
  const fethProducts =  ()=>{
   axios.get("/products").then((res)=>{
     setProducts(res.data)
    }).catch((err)=>{
      console.log("here is your error", err)
    })
  };

  useEffect(() => {
    fethProducts()
  }, [])
  return (
    <>
      <Row>
        {
          Products.map((product => (
            <Col key={product._id} md={3}>
              <ProductScreen product={product} />
            </Col>
          )))

        }
      </Row>
    </>
  )
}

export default HomeScreen;