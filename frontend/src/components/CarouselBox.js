import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import nature from '../assets/img/nature.jpeg'
import nature1 from '../assets/img/nature1.jpg'
import nature2 from '../assets/img/nature2.jpg'


export default function CarouselBox() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ nature }
                    height = { 800 }
                    alt="Nature"
                />
                <Carousel.Caption>
                    <h3>Nature Image</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ nature1 }
                    height = { 800 }
                    alt="Nature"
                />
                <Carousel.Caption>
                    <h3>Nature Image</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ nature2 }
                    height = { 800 }
                    alt="Nature"
                />
                <Carousel.Caption>
                    <h3>Nature Image</h3>
                    <p>lorem ipsum dolor sit amet, consectetur adip</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}