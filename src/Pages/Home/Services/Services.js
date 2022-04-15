import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    return (
        <div>
            <div className='container'>
            <h1 className='text-center text-primary  border-bottom border-info w-25 mx-auto mb-5'>Our Services</h1>
            <div className="row gx-3">
                <div className="col-md-12 Services-container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Services;