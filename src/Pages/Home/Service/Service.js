import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div>
            <Card>
            <Card.Img variant="top" className='p-2 rounded' src={img}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>Price: <span className='text-warning'>${price}</span></Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Service;