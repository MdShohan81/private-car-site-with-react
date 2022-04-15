import React from 'react';

const Service = ({service}) => {
    const {name,price,description,img} = service;
    return (
        <div>
            <h1>This is Services: {name}</h1>
        </div>
    );
};

export default Service;