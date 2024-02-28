import React, { useState } from 'react';
import { sliderData } from '../data/sliderData';
import { data } from '../data/data'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/displaycard.css';

export default function DisplayCard() {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div>
            <div className="CardDisplay">
                <section className='slider'>
                    {sliderData.map((slide, index) => {
                        return (
                            <div
                                className={index === current ? 'slide active' : 'slide'}
                                key={index}
                            >
                                {index === current && (
                                    <div className='imageContainer'>
                                        <div className='imgObj'>
                                            <img src={slide.displayimg} alt='travel image' className='image' />
                                            <div className='btn-on-img'>
                                                <button onClick={prevSlide} className='image-slider-btn left' >
                                                    <FaArrowAltCircleLeft />
                                                </button>
                                                <button onClick={nextSlide} className='image-slider-btn right'>
                                                    <FaArrowAltCircleRight />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )}


                            </div>
                        );
                    })}
                </section>
                <div className="descriptionDetail">
                    {data.map((dataItem)=>(
                    <h2>Cozy Studio Apartment</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum luctus posuere. Sed varius magna eget lobortis.</p>
                    <p><span className="text-title">Rent: ₹{dataItem.price}</span></p>
                    {/* Add more details as needed */})}
                </div>
            </div>
        </div>
    );
}
