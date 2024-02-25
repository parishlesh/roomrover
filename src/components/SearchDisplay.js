import React from 'react'
import '../styles/home.css';
import '../styles/SearchDisplay.css'
import searchCardImg from './room-pics.jpg'

export default function SearchDisplay() {
    return (
        <div>
            <div className="displayContainer">
                <div class="searchCard">
                    <div class="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div class="card-info">
                        <p class="text-title">Location </p>
                        <p class="text-body">Room description and details</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rent</span>
                    </div>
                </div>
                <div class="searchCard">
                    <div class="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div class="card-info">
                        <p class="text-title">Location </p>
                        <p class="text-body">Room description and details</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rent</span>
                    </div>
                </div>
                <div class="searchCard">
                    <div class="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div class="card-info">
                        <p class="text-title">Location </p>
                        <p class="text-body">Room description and details Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur sunt labore, veritatis blanditiis laudantium odio soluta maxime provident! Tempora, distinctio voluptatem. Illum, delectus corporis veniam laborum sequi cupiditate minus?</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rent</span>
                    </div>
                </div>
                <div class="searchCard">
                    <div class="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div class="card-info">
                        <p class="text-title">Location </p>
                        <p class="text-body">Room description and details</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rent</span>
                    </div>
                </div>
                <div class="searchCard">
                    <div class="card-img">
                        <img src={searchCardImg} alt="" className='searchCardImg' style={{ height: '170px' }} />
                    </div>
                    <div class="card-info">
                        <p class="text-title">Location </p>
                        <p class="text-body">Room description and details</p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">Rent</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
