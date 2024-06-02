import React, { useEffect, useState } from 'react';
import '../styles/userprofile.css';
import { data } from '../data/data';
import profileimg from '../profilepics/IMG_20220113_181430_236.webp';
import { useLocation } from 'react-router-dom';

const UserProfileForOtherUsers = ({ setProgress }) => {
    const [profileImage, setProfileImage] = useState(profileimg);
    const [name, setName] = useState("User");
    const [about, setAbout] = useState("");
    const [contact, setContact] = useState("");
    const location = useLocation();

    useEffect(() => {
        setProgress(100);
    }, [location, location]);

    return (
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-11 col-xl-101">
                        <div className="userProfileCard">
                            <div className="rounded text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '250px' }}>
                                <div className="ms-4 d-flex flex-column" style={{ width: '150px' }}>
                                    <div className="profileimg rounded mt-4 justify-content-center" style={{ height: '150px', overflow: 'hidden' }}>
                                        <div className="img-thumbnail" style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden' }}>
                                            <img src={profileImage}
                                                alt="Profile Image" className="img-fluid"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <h5>{name}</h5>
                                </div>
                            </div>

                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <p>{about}</p>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Contact Me</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <p>{contact}</p>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Posts</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <div className='w-100'>
                                    <div className="displayContainer grid m-1 w-100">
                                        {data.map((dataItem) => (
                                            <div key={dataItem.id} className="searchCard col-6 col-md-4">
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
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfileForOtherUsers;
