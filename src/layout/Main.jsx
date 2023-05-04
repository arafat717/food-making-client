/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/share/Header/Header';
import Footer from '../pages/share/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../pages/share/banner/Banner';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Leftbar from '../pages/Leftbar/Leftbar';
import Rightbar from '../pages/Rightbar/Rightbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Leftbar></Leftbar>
                        </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                        </Col>
                    <Col lg={3}>
                        <Rightbar></Rightbar>
                        </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;