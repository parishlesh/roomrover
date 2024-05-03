import React, { useEffect, useState } from 'react';
import '../styles/userprofile.css';
import { data } from '../data/data';
import profileimg from '../profilepics/IMG_20220113_181430_236.webp';
import { useLocation } from 'react-router-dom';

const UserProfile = ({setProgress}) => {
    const [profileImage, setProfileImage] = useState(profileimg);
    const [name, setName] = useState("User");
    const [about, setAbout] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingAbout, setIsEditingAbout] = useState(false)
    const [tempName, setTempName] = useState(name);
    const [tempAbout, setTempAbout] = useState(about);
    const location = useLocation()    

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleEditProfile = () => {
        setTempName(name);
        setIsEditing(true);
    };

    const handleEditAbout = () => {
        setTempAbout(about);
        setIsEditingAbout(true);
    }
    const handleSaveProfile = () => {
        setName(tempName);
        setIsEditing(false);
    };

    const handleSaveAbout = () => {
        setAbout(tempAbout);
        setIsEditingAbout(false);
    }
    useEffect(() => {
        setProgress(100)
      },[location, location])
      
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
                                    <label htmlFor="profileImageInput" className="btn btn-outline-light mt-2" style={{ zIndex: 1 }}>
                                        Edit profile
                                    </label>
                                    <input type="file" id="profileImageInput" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                                </div>

                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    {isEditing ? (
                                        <div>
                                            <input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} />
                                            <button className="btn btn-outline-light mt-2" onClick={handleSaveProfile}>Save</button>
                                        </div>
                                    ) : (
                                        <div className='d-flex align-item-center'>
                                            <h5>{name}</h5>
                                            <button className='editbtn' onClick={handleEditProfile}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill ms-2" viewBox="0 0 24 24">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                            </svg></button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="card-body p-4 text-black">
                                {isEditingAbout ? (
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">About</p>
                                        <div>
                                            <input type="text" value={tempAbout} onChange={(e) => setTempAbout(e.target.value)} />
                                            <button className="btn btn-outline-dark mt-2" onClick={handleSaveAbout}>Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-5">
                                        <div className="d-flex">

                                        <p className="lead fw-normal mb-1">About</p>
                                        <button className='editbtn' onClick={handleEditAbout}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill ms-2" viewBox="0 0 24 24">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                                        </svg></button>
                                        </div>
                                        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                            <p>{about}</p>
                                        </div>
                                    </div>
                                )}

                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Posts</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                <div className='w-100'>
                                    <div className="displayContainer grid m-1 w-100">
                                        {data.map((dataItem) => (
                                            <div key={dataItem.id} className="searchCard col-6 col-md-4">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
