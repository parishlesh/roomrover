import React, { useState } from 'react';
import { sliderData } from '../data/sliderData';
import { data } from '../data/data'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/displaycard.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function DisplayCard() {
    const [current, setCurrent] = useState(0);
    const [apt, setApt] = useState('');
    const length = sliderData.length;

    const { aptId } = useParams()
    useEffect(() => {
        const roomData = data.find(room => room.id === parseInt(aptId))
        setApt(roomData)
        console.log(apt)
    }, [apt, aptId])

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
                                            <img src={slide.displayimg} alt='room' className='image w-100' />
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
                    {/* {data.map((dataItem) => ( */}
                    <div>

                        <h2>{apt.name}</h2>
                        <p>Description: {apt.desc}</p>
                        <p><span className="text-title">Rent: ₹{apt.price}</span></p>
                        {/* Add more details as needed */}
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    );
}
