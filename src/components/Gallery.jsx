import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDownload } from "react-icons/fa";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${backendUrl}/api/images`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setImages(res.data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Uploaded Images
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : images.length === 0 ? (
        <p className="text-center text-gray-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative bg-gray-100 rounded shadow overflow-hidden w-full"
            >
              {/* Download icon always visible */}
              <a
                href={img.url}
                download
                className="absolute top-2 right-2 z-10 p-2 bg-black bg-opacity-50 rounded-full text-white opacity-100"
              >
                <FaDownload size={16} />
              </a>

              <img
                src={img.url}
                alt={`Uploaded ${index}`}
                className="w-full h-auto block"
              />
            </div>
          ))}
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Gallery;
