import React, { useState } from 'react';

const CreatePost = () => {
    const [formData, setFormData] = useState({
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        image5: '',
        bedroom: '',
        bathroom: '',
        furnishing: '',
        bachelorsAllowed: false,
        parkingAvailable: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission logic like posting data to a server
        console.log(formData);
        // Redirect to the page where the ad is showing
        // history.push('/ad-preview'); // Assuming you are using React Router
    };

    const handleCancel = () => {
        // Redirect back to the previous page
        // history.goBack(); // Assuming you are using React Router
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Image 1:
                <input type="file" name="image1" onChange={handleChange} />
            </label>
            <label>
                Image 2:
                <input type="file" name="image2" onChange={handleChange} />
            </label>
            <label>
                Image 3:
                <input type="file" name="image3" onChange={handleChange} />
            </label>
            <label>
                Image 4:
                <input type="file" name="image4" onChange={handleChange} />
            </label>
            <label>
                Image 5:
                <input type="file" name="image5" onChange={handleChange} />
            </label>
            <label>
                Bedroom:
                <input type="number" name="bedroom" onChange={handleChange} />
            </label>
            <label>
                Bathroom:
                <input type="number" name="bathroom" onChange={handleChange} />
            </label>
            <label>
                Furnishing:
                <input type="text" name="furnishing" onChange={handleChange} />
            </label>
            <label>
                Bachelors Allowed:
                <input type="checkbox" name="bachelorsAllowed" onChange={handleCheckboxChange} />
            </label>
            <label>
                Parking Available:
                <input type="checkbox" name="parkingAvailable" onChange={handleCheckboxChange} />
            </label>
            <button type="submit">Post Ad</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

export default CreatePost;
