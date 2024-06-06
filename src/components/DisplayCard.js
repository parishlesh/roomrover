import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import '../styles/displaycard.css';
import { Flex } from 'antd';

export default function DisplayCard() {
    const [current, setCurrent] = useState(0);
    const [room, setRoom] = useState(null);

    const { roomId } = useParams();

    const handleChange=()=>{
        console.log("nothing");
    }

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/roomrover/room/${parseInt(roomId)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setRoom(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchRoom();
    }, [roomId]);

    const nextSlide = () => {
        setCurrent(current === room.images.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? room.images.length - 1 : current - 1);
    };

    if (!room) {
        return <div>Loading...</div>;
    }

    

    return (
        <div className='d-flex justify-content-center align-items-center'>

            <div className="CardDisplay d-flex justify-content-center align-items-center ">

                <div className="discriptionCard">
                    <div className="header">
                        <section className='slider'>
                            {room.images.map((image, index) => (
                                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                    <div className='imageContainer'>
                                        <div className='imgObj'>
                                            <img src={`http://127.0.0.1:8000${image}`} alt={`room ${index + 1}`} className='image w-100' />
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
                                </div>
                            ))}
                        </section>
                    </div>
                    <div className="info">
                        <p className="title">{room.property_name}</p>
                        <p>{room.description}</p>
                        <p className='d-flex align-items-start '>Other Facilities:  <span className='fw-medium'>{room.other_facilities}</span></p>
                        <div className='d-flex justify-content-between'>
                            <div>parking available</div>
                            <div className="checkbox-wrapper-39">
                                <label>
                                    <input  onChange={handleChange} checked={room.parking_available} type="checkbox" />
                                    <span className="checkbox"></span>
                                </label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div>bachelors allowed</div>
                            <div className="checkbox-wrapper-39">
                                <label>
                                    <input onChange={handleChange} checked={room.bachelors_allowed} type="checkbox" />
                                    <span className="checkbox"></span>
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className="footer">
                        <p className="tag fs-6 fw-medium">₹ {room.rent} </p>
                        <button type="button" className="action">{room.contact} </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
