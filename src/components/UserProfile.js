import React from 'react';
import '../styles/userprofile.css';
import { data } from '../data/data'
import profileimg from '../profilepics/IMG_20220113_181430_236.webp'

const UserProfile = () => {
    return (
        <section className="h-100 gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-11 col-xl-101">
                        <div className="userProfileCard">
                            <div className="rounded text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 d-flex flex-column" style={{ width: '150px' }}>
                                    <div className="profileimg rounded mt-4 justify-content-center" style={{ height: '150px', overflow: 'hidden' }}>
                                        <div className="img-thumbnail" style={{ width: '100%', height: '100%', padding: '0', overflow: 'hidden' }}>
                                            <img src={profileimg}
                                                alt="Generic placeholder image" className="img-fluid"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-light" data-mdb-ripple-color="dark"
                                        style={{ zIndex: 1 }}>
                                        Edit profile
                                    </button>
                                </div>

                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <h5>Parishlesh</h5>
                                    <p>Hisar</p>
                                </div>
                            </div>

                            <div className="card-body p-4 text-black">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">About</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <p className="font-italic mb-1">Web Developer</p>
                                        <p className="font-italic mb-1">Lives in New York</p>
                                        <p className="font-italic mb-0">Photographer</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <p className="lead fw-normal mb-0">Recent photos</p>
                                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                                </div>
                                {/* <div className="row g-2">
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </div>
                                    <div className="col mb-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                                            alt="image 1" className="w-100 rounded-3"/>
                                    </div>
                                </div>
                                <div className="row g-2">
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                                            alt="image 1" className="w-100 rounded-3"/>
                                    </div>
                                    <div className="col">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                                            alt="image 1" className="w-100 rounded-3"/>
                                    </div>
                                </div> */}
                                <div>
                                    <div className="displayContainer d-flex flex-nowrap m-1">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;
