import React from 'react';
import heart from '../assets/icons/heart1.png';
import checkUp from '../assets/icons/mark.png';
import dental from '../assets/icons/teeth.png';
import bag from '../assets/icons/bag.png';

const Service = () => {
    return (
        <div className='mt-72 md:mt-96 lg:mt-20'>
            <div className='text-center'>
                <h4 className='text-secondary text-xl font-medium'>Our Services</h4>
                <h1 className='text-textb text-5xl font-medium mt-3'>Services For Your Health</h1>
            </div>
            {/* cards */}
            <div className='px-20 my-10 grid grid-cols-1 lg:grid-cols-4 gap-3'>
                <div className="card w-68 bg-white shadow-xl">
                    <div className="card-body">
                        <div className='card-actions justify-end'>
                            <img src={heart} alt="" />
                        </div>
                        <h2 className="card-title text-textb">Cardiology</h2>
                        <p className='text-paragraph1'>Seduahag perspiciati under omnised atused error.</p>
                        <a className="font-semibold hover:text-primary">Explore Now</a>
                    </div>
                </div>

                <div className="card w-68 bg-white shadow-xl">
                    <div className="card-body">
                        <div className='card-actions justify-end'>
                            <img src={checkUp} alt="" />
                        </div>
                        <h2 className="card-title text-textb">Monthly Check Up</h2>
                        <p className='text-paragraph1'>Seduahag perspiciati under omnised atused error.</p>
                        <a className="font-semibold hover:text-primary">Explore Now</a>
                    </div>
                </div>

                <div className="card w-68 bg-white shadow-xl">
                    <div className="card-body">
                        <div className='card-actions justify-end'>
                            <img src={dental} alt="" />
                        </div>
                        <h2 className="card-title text-textb">Dental Care</h2>
                        <p className='text-paragraph1'>Seduahag perspiciati under omnised atused error.</p>
                        <a className="font-semibold hover:text-primary">Explore Now</a>
                    </div>
                </div>

                <div className="card w-68 bg-white shadow-xl">
                    <div className="card-body">
                        <div className='card-actions justify-end'>
                            <img src={bag} alt="" />
                        </div>
                        <h2 className="card-title text-textb">Opthalmology</h2>
                        <p className='text-paragraph1'>Seduahag perspiciati under omnised atused error.</p>
                        <a className="font-semibold hover:text-primary">Explore Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;