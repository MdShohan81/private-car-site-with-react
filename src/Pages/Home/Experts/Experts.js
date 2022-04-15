import React from 'react';
import Expert from '../Expert/Expert'
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'

const experts = [
    {id: 1, name: 'Naymer junior', img: expert1},
    {id: 2, name: 'Ronaldinio Brazil', img: expert2},
    {id: 3, name: 'David warner', img: expert3},
    {id: 4, name: 'Michel Mash', img: expert4},
    {id: 5, name: 'Mohammad Salah', img: expert5},
    {id: 6, name: 'Mesut Ozil', img: expert6},
]

const Experts = () => {
    return (
        <div>
            <div className='container'>
            <h1 className='text-center text-primary  border-bottom border-info w-25 mx-auto my-5'>Our Experts</h1>
            <div className="row gx-3">
                <div className="col-md-12 Services-container">
                    {
                        experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                    }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Experts;