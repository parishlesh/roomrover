import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import '../styles/displaycard.css';

export default function DisplayCard() {
    const [current, setCurrent] = useState(0);
    const [room, setRoom] = useState(null);

    const { roomId } = useParams();

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
        <div className="CardDisplay">
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
            <div className="descriptionDetail">
                <div>
                    <h2>{room.property_name}</h2>
                    <p>Description: {room.description}</p>
                    <p>Owner Contact: {room.contact}</p>
                    <p><span className="text-title">Rent: ₹{room.rent}</span></p>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    );
}
