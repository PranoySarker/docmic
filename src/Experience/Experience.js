import React from 'react';
import image2 from '../assets/images/img2.png';

const Experience = () => {
    return (
        <div>
            <div className="hero h-fit px-5 lg:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <img src={image2} className="max-w-sm" />
                    <div className='w-full lg:w-4/5'>
                        <p className='text-secondary text-xl font-medium mb-3'>16+ Years Experiences </p>
                        <h1 className="text-textb text-2xl lg:text-5xl font-medium ">We Are Always ensure Best Medical Treatment For Your Health</h1>
                        <p className="py-6 text-paragraph1">
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look lik
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;