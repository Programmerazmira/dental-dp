import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services =[
        {
            _id:1,
            name:'Fluoride Tretment',
            description:"If a dog chews shoes whose shoes does he choose?",
            img:fluoride
        },
        {
            _id:2,
            name:'Cavity Filling',
            description:"If a dog chews shoes whose shoes does he choose?",
            img:cavity
        },
        {
            _id:3,
            name:'Teeth Whitening',
            description:"If a dog chews shoes whose shoes does he choose?",
            img:whitening
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center '>
                <h3 className='text-primary text-xl font-bold uppercase '>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-12 mt-20 '>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>

                    )
                }
            </div>
        </div>
    );
};

export default Services;