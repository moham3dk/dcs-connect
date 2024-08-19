import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const InfoModal = ({ extracurricular, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      {/* Info Modal */}
      <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 bg-white rounded-2xl border border-gray-200 shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{extracurricular.title}</h1>
            <button
              className="text-primary hover:text-opacity-50 transition-colors duration-200"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <AiOutlineCloseCircle size={24} />
            </button>
          </div>
          <p className="text-lg lg:text-xl text-center py-2 mt-4 text-gray-700">{extracurricular.description}</p>
          <div className="flex flex-wrap justify-center items-center mt-4">
            {extracurricular.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-primary text-white py-1 px-3 md:py-2 md:px-5 m-2 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg lg:text-xl py-1 ">
              <span className="font-bold text-primary">Location:</span> {extracurricular.location || 'N/A'}
            </p>
            <p className="text-lg lg:text-xl py-1">
              <span className="font-bold text-primary">Contact Name:</span> {extracurricular.contact[0]?.name || 'N/A'}
            </p>
            <p className="text-lg lg:text-xl py-1">
              <span className="font-bold text-primary">Contact Email:</span>{' '}
              {extracurricular.contact[0]?.email || 'N/A'}
            </p>
            <p className="text-lg lg:text-xl py-1">
              <span className="font-bold text-primary">Contact Phone Number:</span>{' '}
              {extracurricular.contact[0]?.phone || 'N/A'}
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-3">
            <a
              href={extracurricular.link}
              className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300 text-lg"
              aria-label={`View website for ${extracurricular.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Website <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
