import React from 'react';
import image4 from '../assets/images/img4.png';

const Faq = () => {
    return (
        <div className='my-5'>
            <div className="hero h-fit px-5 lg:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                    <img src={image4} className="max-w-sm" />

                    <div className='w-full lg:w-4/5'>
                        <p className='text-secondary text-xl font-medium mb-3'>FAQ Questions </p>
                        <h1 className="text-textb text-2xl lg:text-5xl font-medium ">Get Your General Answer </h1>

                        {/* Accrodion*/}
                        <div className='mt-5'>
                            <div tabIndex={0} className="collapse collapse-plus border bg-base-100 rounded-box">
                                <div className="collapse-title text-xl font-medium">
                                    Focus me to see content
                                </div>
                                <div className="collapse-content">
                                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
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