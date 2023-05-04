/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../../../assets/pexels-creative-vix-375468.jpg';
import photo2 from '../../../assets/pexels-elevate-1267320.jpg';
import photo3 from '../../../assets/pexels-yente-van-eynde-2403392.jpg';

const Banner = () => {
    return (
        <div className='d-flex justify-center'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={photo1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Good food, Good mood</h1>
                        <p>This page contains the best restaurant captions for Instagram: nearly 100 captions that have performed well on Instagram, including captions for food, drinks, staff, setting, and more.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={photo2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>good food, good mood</h1>
                        <p>This page contains the best restaurant captions for Instagram: nearly 100 captions that have performed well on Instagram, including captions for food, drinks, staff, setting, and more.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src={photo3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>good food, good mood</h1>
                        <p>
                        This page contains the best restaurant captions for Instagram: nearly 100 captions that have performed well on Instagram, including captions for food, drinks, staff, setting, and more.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;