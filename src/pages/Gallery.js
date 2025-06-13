// src/pages/Gallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../apiBase'; // 🌐 Import the backend base URL
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedBy, setUploadedBy] = useState('');
  const [uploading, setUploading] = useState(false);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/gallery`);
      setImages(res.data);
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleUpload = async () => {
    if (!selectedFile || !uploadedBy) {
      alert('Enter your name and select an image.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('uploadedBy', uploadedBy);

    try {
      setUploading(true);
      await axios.post(`${API_BASE_URL}/api/gallery/upload`, formData);
      setUploading(false);
      setSelectedFile(null);
      setUploadedBy('');
      fetchImages();
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload failed.');
      setUploading(false);
    }
  };

  return (
    <div className="gallery-container">
      <h2>Upload a Family Photo</h2>

      <div className="upload-section">
        
        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      <h2>Family Gallery</h2>
      <div className="gallery-grid">
        {images.map((img) => (
          <div className="gallery-card" key={img._id}>
            <img src={img.url} alt="Family Upload" />
          
            <a href={img.url} download target="_blank" rel="noopener noreferrer">
              <button className="download-btn">Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
