import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import stadium1 from '../assets/image1.jpg'
import stadium2 from '../assets/image2.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item style={{"height":'244px'}}>
                    <img
                        className='d-block w-100'
                        src={stadium1}
                        alt="Stadiuum"
                    />

                    <Carousel.Caption>
                        <h3>Stadium for football</h3>
                        <p>bebebebeYY</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item style={{"height":'652px'}}>
                    <img
                        className='d-block w-100'
                        src={stadium2}
                        alt="Stadiuum"
                    />

                    <Carousel.Caption>
                        <h3>Stadium for volleyball</h3>
                        <p>bebebebeY</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        )
    }
}