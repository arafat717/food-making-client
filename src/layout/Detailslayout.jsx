/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/share/Header/Header';
import Footer from '../pages/share/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../pages/share/banner/Banner';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';


const Detailslayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={12}><Outlet></Outlet></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Detailslayout;