import React from 'react';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const greet = "I'm an home component!!!";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Home Component</Card.Title>
                            <Card.Text>{greet}</Card.Text>
                        </Card.Body>
                        <Card.Img src="/images/composition.jpg" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Home;
