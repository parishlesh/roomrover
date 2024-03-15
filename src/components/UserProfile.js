import React from 'react'

const UserProfile = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '80vh', border: '2px solid green', }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', border: '2px solid red', height: '50vh', width: '98%', margin: '0px auto' }} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '80%', border: '2px solid green', }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}><img src={""} alt="profileImage" />
                        <span>Parishlesh Fulanshi</span>
                        <span>parishelshfulavnshi@gmail.com</span>
                    </div>
                    <div style={{ width: '100%' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%', border: '2px solid green', }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '2px solid red', height: '50vh', width: '98%', margin: '0px auto' }} ></div>
        </div>
    )
}

export default UserProfile
