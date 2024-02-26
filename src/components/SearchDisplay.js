import React, { useState } from 'react'
import '../styles/home.css';
import '../styles/SearchDisplay.css'
import searchCardImg from './room-pics.jpg'

export default function SearchDisplay() {
    const [read, setRead] = useState(false)

    const handleContent = () => {
        setRead(true)
    }
    return (
        <div>
            <div className="displayContainer">
                <div className="searchCard">
                    <div className="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div className="card-info">
                        <p className="text-title">Location </p>
                        <p className="text-body">Room description and details</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-title">Rent</span>
                    </div>
                </div>
                <div className="searchCard">
                    <div className="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div className="card-info">
                        <p className="text-title">Location </p>
                        <p className="text-body">Room description and details</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-title">Rent</span>
                    </div>
                </div>
                <div className="searchCard">
                    <div className="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div className="card-info">
                        <p className="text-title">Location </p>
                        {<p className="text-body">Room description and details Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur sunt labore, veritatis blanditiis laudantium odio soluta maxime provident! Tempora, distinctio voluptatem. Illum, delectus corporis veniam laborum sequi cupiditate minus length</p>}
                        {}
                    </div>
                    <div className="card-footer">
                        <span className="text-title">Rent</span>
                    </div>
                </div>
                <div className="searchCard">
                    <div className="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div className="card-info">
                        <p className="text-title">Location </p>
                        <p className="text-body">Room description and details</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-title">Rent</span>
                    </div>
                </div>
                <div className="searchCard">
                    <div className="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div className="card-info">
                        <p className="text-title">Location </p>
                        <p className="text-body">Room description and details</p>
                    </div>
                    <div className="card-footer">
                        <span className="text-title">Rent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
