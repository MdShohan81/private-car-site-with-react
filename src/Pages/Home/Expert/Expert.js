import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <Card>
            <Card.Img variant="top" className='p-2' src={img} />
            <Card.Body>
                <Card.Title className='text-center text-primary bolder'>{name}</Card.Title>
            </Card.Body>
        </Card>
       
    );
};

export default Expert;