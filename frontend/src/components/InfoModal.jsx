import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FaExternalLinkAlt } from 'react-icons/fa';

const InfoModal = ({ extracurricularData, onClose }) => {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20 z-50">
      <div className="w-11/12 md:w-9/12 lg:w-8/12 xl:w-7/12 bg-white rounded-xl border-2">
        <div className="text-center py-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold pb-4 text-[#126954]">
            {extracurricularData.title}
          </h1>
          <p className="text-lg lg:text-xl py-2 px-4">{extracurricularData.description}</p>
          <div className="flex flex-wrap justify-center my-1">
            {extracurricularData.tags.map((tag, index) => (
              <p key={index} className="px-4 bg-[#126954] text-white py-2 m-2 md:mx-3 rounded-full font-semibold">
                {tag}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg lg:text-xl py-2 px-4">
              <span className="font-bold text-[#126954]">Location:</span> {extracurricularData.location}
            </p>
            <p className="text-lg lg:text-xl py-2 px-4">
              <span className="font-bold text-[#126954]">Contact Name:</span> {extracurricularData.contact[0].name}
            </p>
            <p className="text-lg lg:text-xl py-2 px-4">
              <span className="font-bold text-[#126954]">Contact Email:</span> {extracurricularData.contact[0].email}
            </p>
            <p className="text-lg lg:text-xl py-2 px-4">
              <span className="font-bold text-[#126954]">Contact Phone Number:</span>{' '}
              {extracurricularData.contact[0].phone}
            </p>
          </div>
          <div className="flex justify-center items-center mt-6 space-x-3">
            <a
              href={extracurricularData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#126954] text-white py-3 px-5 rounded-full hover:bg-opacity-80 text-lg md:text-xl ease-in-out duration-300"
            >
              View Website <FaExternalLinkAlt />
            </a>
            <button
              className="flex items-center gap-2 bg-[#126954] text-white py-3 px-5 rounded-full hover:bg-opacity-80 text-lg md:text-xl ease-in-out duration-300"
              onClick={closeModal}
            >
              Close <AiOutlineCloseCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
