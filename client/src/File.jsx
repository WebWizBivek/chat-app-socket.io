import React, { useState } from "react";
import axios from "axios";
const File = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadResponse, setUploadResponse] = useState(null);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };
  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUploadResponse(response.data);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed.");
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex justify-center  items-center space-y-4 p-4 border rounded-md shadow-md w-full max-w-sm mx-auto">
        <input type="file" onChange={handleFileChange} className="w-full" />
        {selectedFile && (
          <p className="text-sm text-gray-700">Selected: {selectedFile.name}</p>
        )}
        <button
          onClick={handleUpload}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default File;
//
