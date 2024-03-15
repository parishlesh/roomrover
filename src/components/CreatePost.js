import React, { useState } from 'react';
import '../styles/createpost.css';

export default function CreatePost() {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState([]);

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
    setDragging(false); // Hide drag and drop label after files are selected
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    if (newImages.length === 0) {
      setDragging(true); // Show drag and drop label if no images left
    }
  };

  return (
    <div className="container p-5">
      <div
        className={dragging ? 'drop-container dragging' : 'drop-container '}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          multiple
          onChange={handleFileInputChange}
          className="file-input"
        />
        {dragging ? (
          <span className="file-label">Drop Here</span>
        ) : (
          <label htmlFor="fileInput" className="file-label">
            Drag & Drop or Click to upload
          </label>
        )}
        <div className="image-previews">
          {images.map((image, index) => (
            <div key={index} className="image-preview-container">
              <span
                className="close-button"
                onClick={() => removeImage(index)}
              >
                &times;
              </span>
              <img
                src={URL.createObjectURL(image)}
                alt={`Preview ${index}`}
                className="image-preview"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
