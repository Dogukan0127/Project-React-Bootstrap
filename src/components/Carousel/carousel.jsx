import { Carousel } from 'react-bootstrap';

export default function Slayt() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg"
                        alt="First slide"
                        width="800px"
                        height="600px"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg"
                        alt="First slide"
                        width="800px"
                        height="600px"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg"
                        alt="First slide"
                        width="800px"
                        height="600px"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
