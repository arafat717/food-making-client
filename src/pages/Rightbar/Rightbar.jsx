/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";

const Rightbar = () => {
    return (
        <div className='mt-5 ms-20'>
            <Card>
                <Card.Body>You have added this item to your cart <Link>GO TO CHECKOUT</Link></Card.Body>
            </Card>
            <Card className="text-center mt-3">
                <Card.Header><div className='d-flex gap-5'>
                    <h5>Regular License</h5>
                    <h5>$13</h5>
                </div></Card.Header>
                <Card.Body>
                    <Card.Title><h6>Quality checked by resturant</h6></Card.Title>
                    <Card.Title><h6>Future updates</h6></Card.Title>
                    <Card.Title><h6>6 months free food</h6></Card.Title>
                    <Card.Title><h6>Best quality food</h6></Card.Title>
                    <Button variant="primary" size="lg">
                    <BsFillCartFill></BsFillCartFill>
                        Add to cart
                    </Button>
                </Card.Body>
                <Card.Title><h6>
                    
                    Price is in US dollars and excludes tax</h6></Card.Title>
            </Card>
            <h3 className="text-center text-danger mt-3">BEST CHEF FROM ITALI</h3>
            <Card className="text-center mt-3" style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Name: Giorgio Locatelli</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                    <Button variant="primary">Contact</Button>
                </Card.Body>
            </Card>
            <Card className="text-center mt-3" style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3338675/pexels-photo-3338675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Name: Carlo Cracco.</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                    <Button variant="primary">Contact</Button>
                </Card.Body>
            </Card>
            <Card className="text-center mt-3" style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3351927/pexels-photo-3351927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Name: Gino DAcampo</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                    <Button variant="primary">Contact</Button>
                </Card.Body>
            </Card>
            <Card className="text-center mt-3" style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4253312/pexels-photo-4253312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Name: Salvatore Cuomo</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                    <Button variant="primary">Contact</Button>
                </Card.Body>
            </Card>
            <Card className="text-center mt-3" style={{ width: '17rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Name: Fabio Viviani</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the  content.
                    </Card.Text>
                    <Button variant="primary">Contact</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Rightbar;