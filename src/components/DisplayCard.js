import React, { useState } from 'react';
import { sliderData } from '../data/sliderData';
import { data } from '../data/data'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import '../styles/displaycard.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function DisplayCard() {
    const [current, setCurrent] = useState(0);
    const [room, setRoom] = useState(null)
    const length = sliderData.length;

    const { roomId } = useParams()
    useEffect(() => {
        const fetchRoom = async () => {
            try {
                // Fetch charging station details by ID
                console.log(roomId)
                const response = await fetch(`http://127.0.0.1:8000/roomrover/room/${parseInt(roomId)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setRoom(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };

        fetchRoom();
    }, [roomId]);
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
                                            <img src={room && `http://127.0.0.1:8000/${room.image}`} alt='room' className='image w-100' />
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
                        <h2>{room && room.property_name}</h2>
                        <p>Description: {room && room.description}</p>
                        <p><span className="text-title">Rent: ₹{room && room.rent}</span></p>
                        {/* Add more details as needed */}
                    </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    );
}
