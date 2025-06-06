import React, { useState } from "react";

const File = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log(selectedFile);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4 border rounded-md shadow-md w-full max-w-sm mx-auto">
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
  );
};

export default File;
//
