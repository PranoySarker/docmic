import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-100 text-base-content">
                <div>
                    <div className='w-48'>
                        <a className="normal-case text-3xl font-bold cursor-pointer">
                            <span className='text-primary'>Doc</span>
                            <span className='text-secondary'>mic</span>
                        </a>
                        <p className='mt-3 text-paragraph1'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee</p>
                    </div>
                    <div className='flex flex-row gap-2 text-xl text-primary mt-10'>
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaGooglePlus />
                        <FaTwitterSquare />
                        <FaYoutube />
                    </div>
                    <p className='text-textb mt-3'>Copyright @222 Medicom All Rights Reserved</p>
                </div>

                <div>
                    <span className="footer-title text-secondary">Quick Links</span>
                    <a className="link link-hover text-textb">About us</a>
                    <a className="link link-hover text-textb">Our pricing</a>
                    <a className="link link-hover text-textb">Our Gallery</a>
                    <a className="link link-hover text-textb">Appointment</a>
                    <a className="link link-hover text-textb">Privacy Policy</a>
                </div>

                <div className='mt-3'>
                    <span className="link link-hover">Services</span>
                    <a className="link link-hover text-textb">Branding</a>
                    <a className="link link-hover text-textb">Design</a>
                    <a className="link link-hover text-textb">Marketing</a>
                    <a className="link link-hover text-textb">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title text-secondary">Opening Hourse</span>
                    <p>
                        <span className='text-primary'>Mon - Tue</span>
                        <span className='ml-3'>08.00 AM - 05.00 PM</span>
                    </p>
                    <p>
                        <span className='text-primary'>Wed - Thu</span>
                        <span className='ml-3'>09.00 AM - 06.00 PM</span>
                    </p>
                    <p>
                        <span className='text-primary'>Fri - Sat</span>
                        <span className='ml-3'>10.00 AM - 07.00 PM</span>
                    </p>
                    <p>
                        <span className='text-primary'>Sunday</span>
                        <span className='ml-3'>Emergency Only</span>
                    </p>
                    <p>
                        <span className='text-primary'>Personal</span>
                        <span className='ml-3'>Monday- 05.00 PM</span>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;