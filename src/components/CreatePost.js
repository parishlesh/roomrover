import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/createpost.css';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

export default function CreatePost() {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState([]);
  const [propertyInfo, setPropertyInfo] = useState({
    name: '',
    location: '',
    description: '',
    parkingAvailable: false,
    bachelorsAllowed: false,
    otherFacilities: '',
    email: '',
    contact: '',
    rent: '',
    city: '',
    state: '',
    size: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const inputFileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setImages([...images, ...imageFiles]);
    setDragging(false);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    if (newImages.length === 0) {
      setDragging(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPropertyInfo(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleClick = () => {
    inputFileRef.current.click();
  };

  const handlePostAd = async () => {
    const formData = new FormData();
    formData.append('email', propertyInfo.email);
    formData.append('property_name', propertyInfo.name);
    formData.append('city', propertyInfo.city);
    formData.append('state', propertyInfo.state);
    formData.append('size', propertyInfo.size);
    formData.append('description', propertyInfo.description);
    formData.append('parking_available', propertyInfo.parkingAvailable);
    formData.append('bachelors_allowed', propertyInfo.bachelorsAllowed);
    formData.append('contact', propertyInfo.contact);
    formData.append('rent', propertyInfo.rent);
    formData.append('other_facilities', propertyInfo.otherFacilities);

    images.forEach((image) => {
      formData.append('pictures', image);
    });

    try {
      const response = await fetch('http://127.0.0.1:8000/roomrover/createroom', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log('Room created successfully:', data);
      setToastMessage('Successfully created ad');
      setShowToast(true);
      setPropertyInfo({
        name: '',
        location: '',
        description: '',
        parkingAvailable: false,
        bachelorsAllowed: false,
        otherFacilities: '',
        email: '',
        contact: '',
        rent: '',
        city: '',
        state: '',
        size: '',
      });
      setImages([]);
    } catch (error) {
      console.error('Error creating room:', error);
      setToastMessage('Error creating post. Please try again.');
      setShowToast(true);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="container p-5 d-flex align-items-center justify-content-center  flex-column">

      <Row className='d-flex align-items-center justify-content-center'>
        <Col xs={6}>
          <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
            <Toast.Header>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </Col>
      </Row>
      <div
        className={dragging ? 'drop-container dragging' : 'drop-container'}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="image-previews">
          {images.map((image, index) => (
            <div key={index} className="image-preview-container position-relative">
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="image-preview"
              />
              <span
                className="close-button position-absolute top-0 end-0"
                onClick={() => removeImage(index)}
              >
                &times;
              </span>
            </div>
          ))}
        </div>
        <div className="container d-flex align-items-center justify-content-center">
          <button className="btn btn-success" onClick={handleClick}>
            Drag & Drop or Click to upload
          </button>
        </div>
      </div>
      <div className="container details">
        <input className='input'
          type="file"
          ref={inputFileRef}
          onChange={handleFileInputChange}
          style={{ display: 'none' }}
          multiple
          accept="image/*"
        />
      </div>
      <input className='input'
        type="text"
        name="email"
        value={propertyInfo.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input className='input'
        type="text"
        name="name"
        value={propertyInfo.name}
        onChange={handleChange}
        placeholder="Property Name"
      />
      <input className='input'
        type="text"
        name="location"
        value={propertyInfo.location}
        onChange={handleChange}
        placeholder="Location"
      />
      <input className='input'
        type="text"
        name="city"
        value={propertyInfo.city}
        onChange={handleChange}
        placeholder="City"
      />
      <input className='input'
        type="text"
        name="state"
        value={propertyInfo.state}
        onChange={handleChange}
        placeholder="State"
      />
      <input className='input'
        type="text"
        name="size"
        value={propertyInfo.size}
        onChange={handleChange}
        placeholder="Size"
      />
      <textarea className='input'
        name="description"
        value={propertyInfo.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <input className='input'
        type="text"
        name="otherFacilities"
        value={propertyInfo.otherFacilities}
        onChange={handleChange}
        placeholder="Other Facilities"
      />
      <input className='input'
        type="text"
        name="contact"
        value={propertyInfo.contact}
        onChange={handleChange}
        placeholder="Contact"
      />
      <input className='input'
        type="text"
        name="rent"
        value={propertyInfo.rent}
        onChange={handleChange}
        placeholder="Rent"
      />
      <div className="parking-and-bachelors d-flex ">
        <label className='d-flex flex-column'>
          <input className='input'
            type="checkbox"
            name="parkingAvailable"
            checked={propertyInfo.parkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>
        <label className='d-flex flex-column'>
          <input className='input'
            type="checkbox"
            name="bachelorsAllowed"
            checked={propertyInfo.bachelorsAllowed}
            onChange={handleChange}
          />
          Bachelors Allowed
        </label>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-success me-3" onClick={handlePostAd}>
          Post Ad
        </button>
        <button className="btn btn-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
