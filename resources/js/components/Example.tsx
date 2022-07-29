import React from 'react';
import { createRoot } from 'react-dom/client';
import Card from 'react-bootstrap/Card';

const Example = () => {
    const greet = "I'm an example component!!!";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <Card>
                        <Card.Body>
                            <Card.Title>Example Component</Card.Title>
                            <Card.Text>{greet}</Card.Text>
                        </Card.Body>
                        <Card.Img src="/images/composition.jpg" />
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Example;

const element = document.getElementById('app');
if (element === null) {
    throw new Error('Failed to find the app element');
}
const root = createRoot(element);
root.render(<Example />);
