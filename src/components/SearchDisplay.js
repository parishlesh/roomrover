import React, { useEffect, useState } from 'react'
import '../styles/home.css';
import '../styles/SearchDisplay.css'
import img from '../photos/room-pics.jpg'
// import searchCardImg from '../photos/room-pics.jpg'

export default function SearchDisplay() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/roomrover/rooms');
                if (!response.ok) {
                    throw new Error('Failed to fetch rooms');
                }
                const data = await response.json();
                setRooms(data.rooms);
                console.log(data.rooms)
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);
    return (
        <div className="m-auto" style={{ width: "auto" }}>
            <div className="displayContainer">
                {rooms.map((room) => (
                    <div key={room.id} className="searchCard">
                        <div className="card-img">

                            {room.image ? (
                                <img src={`http://127.0.0.1:8000/${room.image}`} alt={room.property_name} className='searchCardImg' style={{ height: '170px' }} />
                            ) : (
                                <div className="placeholder-image">No Image Available</div>
                            )}
                        </div>
                        <div className="card-info">
                            <p className="text-title">Location {room.city} </p>
                            <a style={{ textDecoration: "none" }} href={`/displayCard/${room.id}`}>
                                <p className="text-body">{room.description.substring(0, 100)}...<span style={{ color: "red" }}>read more</span></p>
                            </a>
                        </div>
                        <div className="card-footer">
                            <span className="text-title">Rent: ₹{room.rent}</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
