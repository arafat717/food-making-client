/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css'
import { Nav } from 'react-bootstrap';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
    return (
        <div className="footer-content mt-5">
            <h3 className=" mt-5">BEST ITALIAN FOOD</h3>
            <p>Kitchen Authority is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.</p>
            <div className='d-flex'>
                <Nav.Item className='m-5 mt-2'>
                    <Nav.Link href="/home"><BsFacebook></BsFacebook></Nav.Link>
                </Nav.Item>
                <Nav.Item className='m-5 mt-2'>
                    <Nav.Link eventKey="link-1"><BsTwitter></BsTwitter></Nav.Link>
                </Nav.Item>
                <Nav.Item className='m-5 mt-2'>
                    <Nav.Link eventKey="link-2"><BsInstagram></BsInstagram></Nav.Link>
                </Nav.Item>
            </div>
            <div className='”footer-bottom”'>
                <h5>© Copyright 2023 Chipsofic</h5>
            </div>
        </div>
    );
};

export default Footer;