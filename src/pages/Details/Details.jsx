/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const food = useLoaderData();
    const { description, ingrediants, method, photo, id, name, exprience, nm_recipies, likes } = food;
    return (
        <div className='mt-5'>
            <Card>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Tottal: {likes} likes
                    </Card.Text>
                    <Card.Text>
                        {ingrediants}
                    </Card.Text>
                    <Card.Title>{method}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        Exprience: {exprience}
                    </Card.Text>
                    <Card.Text>
                        Tottal: {nm_recipies}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;