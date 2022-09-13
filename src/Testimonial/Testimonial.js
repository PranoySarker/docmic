import React from 'react';
import image5 from '../assets/images/img5.png';
import image6 from '../assets/images/img6.png';
import image1 from '../assets/images/img1.png';

const Testimonial = () => {
    return (
        <div className='py-12'>
            <div className='text-center'>
                <h4 className='text-secondary text-xl font-medium'>Testimonial</h4>
                <h1 className='text-textb text-2xl lg:text-5xl font-medium mt-3'>What they say?</h1>
            </div>
            <div className='px-20 mt-10'>
                <div className="carousel w-full shadow-xl">
                    {/* slider 1 */}
                    <div id="slide1" className="carousel-item relative w-full border-b-slate-500">
                        <div>
                            <div className="hero h-62">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src={image5} className='max-w-sm' />
                                    <div className='w-2/3'>
                                        <h1 className="text-2xl font-bold">David Jeams</h1>
                                        <h2 className="text-lg font-bold">Patient</h2>
                                        <p className="py-6">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* silder2 */}
                    <div id="slide2" className="carousel-item relative w-full">
                        <div>
                            <div className="hero h-62">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src={image6} className='max-w-sm h-52' />
                                    <div className='w-2/3'>
                                        <h1 className="text-2xl font-bold">David Jeams</h1>
                                        <h2 className="text-lg font-bold">Patient</h2>
                                        <p className="py-6">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    {/* slider3 */}
                    <div id="slide3" className="carousel-item relative w-full">
                        <div>
                            <div className="hero h-62">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <img src={image1} className='max-w-sm h-52' />
                                    <div className='w-2/3'>
                                        <h1 className="text-2xl font-bold">David Jeams</h1>
                                        <h2 className="text-lg font-bold">Patient</h2>
                                        <p className="py-6">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;