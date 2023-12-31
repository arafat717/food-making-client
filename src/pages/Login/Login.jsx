/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../providers/Authprovider';

const Login = () => {
    const { signin, google, github } = useContext(AuthContex)
    const [error,setError]=useState('')

    const navigate = useNavigate()
    const location = useLocation()


    const from = location.state?.from?.pathname || '/';


    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signin(email, password)
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
                navigate(from, { replace: true })
                setError(' ')
                event.target.reset()
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    const handlegoogle = () => {
        google()
            .then(result => {
                const loggeduser = result.user;
                console.log(loggeduser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handlegithub = () => {
        github()
        .then(result=>{
            const loggeduser = result.user;
            console.log(loggeduser)
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error)
        })
    }


    return (
        <Container className='mx-auto w-25 mt-5'>
            <h1>Please Login</h1>
            <Form onSubmit={handlelogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-muted text-danger">
                    Don't have an account? <Link to='/register'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-muted text-success">

                </Form.Text>
                <br />
                <Form.Text className=" text-danger">
                    {error}
                </Form.Text>
            </Form>
            <div className='d-flex gap-5 mt-3'>
                <Button onClick={handlegoogle} variant="success">Google Login</Button>
                <Button onClick={handlegithub} variant="success">gihub login</Button>
            </div>
        </Container>
    );
};

export default Login;