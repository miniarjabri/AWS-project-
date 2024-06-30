// src/FileUpload.js
import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

function FileUpload() {
      const [file, setFile] = useState(null);
  
      const handleChange = (event) => {
          const file = event.target.files[0];
          setFile(file);
      };
  
      const handleSubmit = async (event) => {
          event.preventDefault();
          if (file) {
              try {
                  const result = await Storage.put(file.name, file, {
                      contentType: file.type,
                  });
                  console.log('File uploaded successfully:', result);
                  // Ajoutez ici toute logique supplémentaire après le téléchargement
              } catch (error) {
                  console.error('Error uploading file:', error);
              }
          }
      };
  
      return (
          <div className="FileUpload">
              <h3>Upload Image</h3>
              <form onSubmit={handleSubmit}>
                  <input type="file" onChange={handleChange} />
                  <button type="submit">Upload</button>
              </form>
          </div>
      );
  }
  
  export default FileUpload;
  