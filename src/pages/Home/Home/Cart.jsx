/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Cart = ({ dt }) => {
  console.log(dt)
  const { id, photo, name, exprience, nm_recipies, likes } = dt;
  return (
    <div className='m-5'>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            Tottal: {nm_recipies}
          </Card.Text>
          <Card.Text>
            Tottal: {likes} likes
          </Card.Text>
          <Card.Text>
            Exprience: {exprience}
          </Card.Text>
          <Link to={`/Details/${id}`}><Button variant="primary">View Recipes</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cart;