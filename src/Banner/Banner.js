import React from 'react';
import eclipse from '../assets/icons/eclipse.svg';
import image1 from '../assets/images/img1.png';
import roundTik from '../assets/icons/tik-round.png';
import doctor1 from '../assets/images/doc1.png';
import doctor2 from '../assets/images/doc2.png';
import doctor3 from '../assets/images/doc3.png';
import plus from '../assets/icons/plus.png';

const Banner = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-content-center h-fit my-10 lg:mt-24 px-5 md:px-12 lg:px-32'>

                {/* Banner left part */}
                <div className='banner-left flex-1'>

                    {/* left side text */}
                    <div className='flex flex-col lg:gap-4'>
                        <p className='text-md md:text-xl lg:text-5xl font-medium'>Your <span className='text-primary'>Health</span> Is Our</p>
                        <p className='text-md md:text-xl lg:text-5xl font-medium'>Top <span className='text-secondary'>Priority</span></p>
                        <p className='w-96 text-paragraph1'>
                            There are many variations of passages of lpsum available, but the majority hae suffered.
                        </p>

                        {/* Left side button */}
                        <button className='btn btn-primary lg:w-48 mt-3'>Meet Our Specialists</button>

                        {/* statistics  */}
                        <div className='flex flex-row gap-6 mt-8'>
                            <div className='text-center w-36'>
                                <p className='text-secondary text-xl font-medium'>+262k</p>
                                <p>Recover Patient</p>
                            </div>
                            <div className='text-center w-36'>
                                <p className='text-secondary text-xl font-medium'>96%</p>
                                <p>Satisfaction Rate</p>
                            </div>
                            <div className='text-center w-36'>
                                <p className='text-secondary text-xl font-medium'>86+</p>
                                <p>Expert Doctors</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner right part */}

                <div className='banner-right flex-1 ml-16'>

                    {/* make right side images position */}
                    <div className='relative mt-14 md:mt-10 lg:mt-0'>
                        <img src={eclipse} className='absolute w-9/11 h-44 md:h-96 pl-5 z-10' alt="" />
                        <img src={image1} className='absolute  md:-mt-5 w-52 md:w-96 z-10' alt="" />

                        {/* creating the floating cards */}
                        <div className='z-20 absolute card' style={{ top: '14rem', left: '-6rem' }}>
                            <div className=' w-48 bg-secondary flex justify-center items-center'>
                                <img src={roundTik} alt="" className='mt-2' />
                                <p className='text-white '>Regular Checkup</p>
                            </div>
                        </div>

                        <div className='z-20 absolute rounded-md hidden md:block' style={{ top: '16rem', left: '16rem' }}>
                            <div className="card w-52 bg-white shadow-xl">
                                <p className='px-3 pt-1'>Meet Our Doctors</p>
                                <div className="card-body flex flex-row">

                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={doctor1} />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={doctor2} />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full">
                                            <img src={doctor3} />
                                        </div>
                                    </div>
                                    <div className='w-8 mt-1'>
                                        <img src={plus} className='' alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Banner;