import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/home.css';
import '../styles/SearchDisplay.css';

export default function SearchDisplay() {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/roomrover/rooms');
                if (!response.ok) {
                    throw new Error('Failed to fetch rooms');
                }
                const data = await response.json();
                setRooms(data);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchRooms();
    }, []);

    useEffect(() => {
        if (query) {
            const filtered = rooms.filter(room => room.city.toLowerCase().includes(query.toLowerCase()));
            setFilteredRooms(filtered);
        } else {
            setFilteredRooms(rooms);
        }
    }, [query, rooms]);

    return (
        <div className="m-auto" style={{ width: "auto" }}>
            <div className="displayContainer">
                {filteredRooms.map((room) => (
                    <div key={room.id} className="searchCard">
                        <div className="card-img">
                            {room.images.length > 0 ? (
                                <img src={`http://127.0.0.1:8000/${room.images[0]}`} alt={room.property_name} className='searchCardImg' style={{ height: '170px' }} />
                            ) : (
                                <div className="placeholder-image">No Image Available</div>
                            )}
                        </div>
                        <div className="card-info">
                            <p className="text-title">Location: {room.city} </p>
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
    );
}
