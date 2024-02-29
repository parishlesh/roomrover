import React from 'react'
import '../styles/home.css';
import '../styles/SearchDisplay.css'
import img from '../photos/room-pics.jpg'
// import searchCardImg from '../photos/room-pics.jpg'
import { data } from '../data/data'

export default function SearchDisplay() {

    return (
        <div>
            <div className="displayContainer">
                {data.map((dataItem) => (
                    <div key={dataItem.id} className="searchCard">
                        {console.log(dataItem.Img)}
                        <div className="card-img">
                            <img src={dataItem.Img} alt="" className='searchCardImg' style={{ height: '170px' }} />
                        </div>
                        <div className="card-info">
                            <p className="text-title">Location </p>
                            <a style={{ textDecoration: "none" }} href={`/displayCard/${dataItem.id}`}>
                                <p className="text-body">{(dataItem.desc).substring(0, 100)}...<span style={{ color: "red" }}>read more</span></p>
                            </a>
                        </div>
                        <div className="card-footer">
                            <span className="text-title">Rent: ₹{dataItem.price}</span>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
