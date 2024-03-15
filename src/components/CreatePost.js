import React, { useState, useRef } from 'react';
import '../styles/createpost.css';

export default function CreatePost() {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState([]);
  const [propertyInfo, setPropertyInfo] = useState({
    name: '',
    location: '',
    description: '',
    parkingAvailable: false,
    bachelorsAllowed: false,
    otherFacilities: ''
  });

  const inputFileRef = useRef(null);

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

  const handlePostAd = () => {
    // Logic to post ad goes here
    console.log('Posting ad:', propertyInfo, images);
    // Reset state or close component
  };

  const handleCancel = () => {
    // Logic to cancel goes here
    // Reset state or close component
  };

  return (
    <div className="container p-5">
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
                className="image-preview "
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

          <input
            type="file"
            ref={inputFileRef}
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
            multiple
            accept="image/*"
          />
        </div>
        <input
          type="text"
          name="name"
          value={propertyInfo.name}
          onChange={handleChange}
          placeholder="Property Name"
        />
        <input
          type="text"
          name="location"
          value={propertyInfo.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <textarea
          name="description"
          value={propertyInfo.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="otherFacilities"
          value={propertyInfo.otherFacilities}
          onChange={handleChange}
          placeholder="Other Facilities"
        />
        <div className="parking-and-bachelors">

          <label>
            <input
              type="checkbox"
              name="parkingAvailable"
              checked={propertyInfo.parkingAvailable}
              onChange={handleChange}
            />
            Parking Available
          </label>
          <label>
            <input
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
          <button className="btn btn-success" onClick={handleCancel}>
            Cancel
          </button>
        </div>
    </div>
  );
}
