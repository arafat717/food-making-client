/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../providers/Authprovider';

const Register = () => {
    const {createuser}=useContext(AuthContex)
    const handleRegister = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createuser(email,password)
        .then(result=>{
            const newuser = result.user;
            console.log(newuser)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <Container className='mx-auto w-25 mt-5'>
            <h2>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo_url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept terms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-muted text-danger">
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>
                <Form.Text className="text-muted text-success">

                </Form.Text>
                <Form.Text className="text-muted text-success">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;