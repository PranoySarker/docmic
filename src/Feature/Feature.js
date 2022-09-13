import React from 'react';
import image3 from '../assets/images/img3.png';
import nurse from '../assets/icons/nurse.png';
import text from '../assets/icons/text-box.png';
import environment from '../assets/icons/tree.png';
import hour from '../assets/icons/hour.png';

const Feature = () => {
    return (
        <div>
            <div className="hero h-fit px-5 my-8 lg:px-20">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <img src={image3} className="max-w-sm" />
                    <div>
                        <p className='text-secondary text-xl font-medium mb-3'>Our Hospital Feature </p>
                        <h1 className="text-textb text-2xl lg:text-5xl font-medium ">Make An Appointment Easy And Fast Services </h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3'>
                            {/* feature cards */}
                            <div className="card w-68 lg:w-96 bg-white shadow-xl">
                                <div className="card-body">

                                    <div className='card-actions justify-between'>
                                        <h2 className="card-title text-textb">24 Hours Doctors Support</h2>
                                        <img src={nurse} alt="" />
                                    </div>
                                    <p className='text-paragraph1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                            <div className="card w-68 lg:w-96 bg-white shadow-xl">
                                <div className="card-body">

                                    <div className='card-actions justify-between'>
                                        <h2 className="card-title text-textb">Exclusive Supports</h2>
                                        <img src={text} alt="" />
                                    </div>
                                    <p className='text-paragraph1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                            <div className="card w-68 lg:w-96 bg-white shadow-xl">
                                <div className="card-body">

                                    <div className='card-actions justify-between'>
                                        <h2 className="card-title text-textb">Friendly Environment </h2>
                                        <img src={environment} alt="" />
                                    </div>
                                    <p className='text-paragraph1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                            <div className="card w-68 lg:w-96 bg-white shadow-xl">
                                <div className="card-body">

                                    <div className='card-actions justify-between'>
                                        <h2 className="card-title text-textb">24 Hours Nurse Support</h2>
                                        <img src={hour} alt="" />
                                    </div>
                                    <p className='text-paragraph1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;