// src/FileUpload.js
import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const result = await Storage.put(file.name, file, {
          contentType: file.type,
        });
        setMessage(`File uploaded successfully: ${result.key}`);
      } catch (error) {
        setMessage(`Error uploading file: ${error.message}`);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}

export default FileUpload;
