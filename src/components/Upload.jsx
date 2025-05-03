import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      await axios.post(`${backendUrl}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("File uploaded successfully");
      setFile(null);
      setPreview(null);
    } catch (err) {
      toast.error(err.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md p-6 rounded-xl w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>

        {/* Stylish Image Selector */}
        <label
          htmlFor="fileInput"
          className="flex items-center justify-center w-full h-40 border-2 border-dashed border-blue-400 rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 mb-4 transition"
        >
          <span className="text-blue-600 font-medium">
            {file ? file.name : "Click to select an image"}
          </span>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Image Preview */}
        {preview && (
          <div className="w-full h-64 flex justify-center items-center mb-4">
            <img
              src={preview}
              alt="Preview"
              className="object-contain max-w-full max-h-full rounded" // Ensures no cropping and keeps aspect ratio
            />
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className={`w-full py-3 rounded ${loading ? 'bg-gray-400' : 'bg-gray-600 hover:bg-gray-700'} text-white`}
          disabled={loading} // Disable the button while uploading
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Upload;
