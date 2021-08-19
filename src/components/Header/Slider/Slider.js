import { Carousel } from "react-bootstrap";
import './slider.css';

export const Slider = () => {
    return(
        <Carousel variant="dark" className="carousel">
            <Carousel.Item className="slide-container">
                <img
                className="d-block w-100"
                src="./images/slider/Gatos.png"
                // "holder.js/800x400?text=First slide&bg=f5f5f5"
                alt="First slide"
                />
                {/* <Carousel.Caption className="caption-container">
                <h5>Todo para tu gato</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className="slide-container">
                <img
                className="d-block w-100"
                src="./images/slider/Perros.png"
                alt="Second slide"
                />
                {/* <Carousel.Caption className="caption-container">
                <h5>Todo para tu perro</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item className="slide-container">
                <img
                className="d-block w-100"
                src="./images/slider/Mascotas.png"
                alt="Third slide"
                />
                {/* <Carousel.Caption className="caption-container">
                <h5>SALE!</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}