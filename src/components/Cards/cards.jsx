import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Cards() {
    return (
        <div className="cards-box">
            <div className="cards-container">
                <Row xs={1} md={3} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg"
                                    width="364px" height="160px" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}
