import React from 'react';
import { createRoot } from 'react-dom/client';

function Example() {
    const greet = "I'm an example component!!!";
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">{greet}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

const element = document.getElementById('app');
if (element === null) {
    throw new Error('Failed to find the app element');
}
const root = createRoot(element);
root.render(<Example />);
