import React from 'react';
import image4 from '../assets/images/img4.png';
import redHeart from '../assets/icons/heart2.png';
import gloves from '../assets/icons/gloves.png';
import pressure from '../assets/icons/pressure.png';
import light from '../assets/icons/light.png';

const Faq = () => {
    return (
        <div className='my-5'>
            <div className="hero h-fit px-5 lg:px-20">
                <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-20">
                    <div className='relative'>
                        <img src={image4} className="max-w-sm" />

                        <img src={redHeart} className='absolute' alt="" style={{ top: '4rem', left: '2rem' }} />

                        <img src={gloves} className='absolute' alt="" style={{ top: '10rem', left: '14rem' }} />

                        <img src={pressure} className='absolute' alt="" style={{ top: '0rem', left: '17rem' }} />

                        <div className='z-20 absolute' style={{ top: '14rem', left: '-5rem' }}>
                            <div className='w-52 bg-white shadow-lg flex justify-center items-center'>
                                <img src={light} alt="" className='mt-2' />
                                <p className=''>Get Solutions From Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-4/5'>
                        <p className='text-secondary text-xl font-medium mb-3'>FAQ Questions </p>
                        <h1 className="text-textb text-2xl lg:text-5xl font-medium ">Get Your General Answer </h1>

                        {/* Accrodion*/}
                        <div className='mt-5 w-68 lg:w-4/5'>
                            <div tabIndex={0} className="collapse collapse-plus border bg-base-100">
                                <div className="collapse-title text-xl font-medium">
                                    Get Your General Answer
                                </div>
                                <div className="collapse-content">
                                    <p> Some text will goes there</p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-plus border bg-base-100 ">
                                <div className="collapse-title text-xl font-medium">
                                    Will I always see my own doctor?
                                </div>
                                <div className="collapse-content">
                                    <p> Some text will goes there</p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-plus border bg-base-100 ">
                                <div className="collapse-title text-xl font-medium">
                                    What is one Medical’s care?
                                </div>
                                <div className="collapse-content">
                                    <p> Some text will goes there</p>
                                </div>
                            </div>

                            <div tabIndex={0} className="collapse collapse-plus border bg-base-100 ">
                                <div className="collapse-title text-xl font-medium">
                                    What is evidence based medicine?
                                </div>
                                <div className="collapse-content">
                                    <p> Some text will goes there</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;