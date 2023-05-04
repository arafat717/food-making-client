/* eslint-disable no-unused-vars */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../pages/share/footer/Footer';
import Header from '../pages/share/Header/Header';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog/Blog';

const Bloglayout = () => {
    return (
        <div>
            <Header></Header>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Bloglayout;