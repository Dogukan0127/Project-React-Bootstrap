import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Content1() {
    return (
        <div className='urun1'>
            <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg" />
            </Card>
            <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Body>
                    <Card style={{ width: '18rem', height: '6rem' }}>
                        <Card.Body>
                            AAAA
                        </Card.Body>
                    </Card>
                    <Card.Text style={{ width: '18rem', height: '6rem' }}>
                        bbbbbb
                    </Card.Text>
                    <Card.Text style={{ width: '18rem', height: '6rem' }}>
                        cccccc
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

        /*
        <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Img variant="top" src="https://i.pinimg.com/564x/24/1c/0e/241c0e7a4cca8ac93810d6ef85dd9c80.jpg" />
            </Card>
            <Card style={{ width: '18rem', height: '18rem' }}>
                <Card.Body>
                    <Card style={{ width: '18rem', height: '6rem' }}>
                        <Card.Text>
                            aaaaaa
                        </Card.Text>
                    </Card>
                    <Card.Text style={{ width: '18rem', height: '6rem' }}>
                        bbbbbb
                    </Card.Text>
                    <Card.Text style={{ width: '18rem', height: '6rem' }}>
                        cccccc
                    </Card.Text>
                </Card.Body>
            </Card>
        */
    )
}
