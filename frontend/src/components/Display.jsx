import React, { useState, useEffect } from 'react';
import InfoModal from './InfoModal';
import { CiCircleInfo } from 'react-icons/ci';
import { CiBookmark } from 'react-icons/ci';

const Display = ({ extracurricularData }) => {
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || {});
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedExtracurricular, setSelectedExtracurricular] = useState(null);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (extracurricularTitle) => {
    setBookmarks((oldBookmarks) => {
      const isCurrentlyBookmarked = oldBookmarks.hasOwnProperty(extracurricularTitle);
      const newBookmarks = { ...oldBookmarks };

      if (isCurrentlyBookmarked) {
        delete newBookmarks[extracurricularTitle];
      } else {
        newBookmarks[extracurricularTitle] = true;
      }

      return newBookmarks;
    });
  };

  const openInfoModal = (extracurricular) => {
    setSelectedExtracurricular(extracurricular);
    setIsInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const filteredExtracurriculars = extracurricularData.filter(
    (extracurricular) =>
      (showBookmarks ? bookmarks.hasOwnProperty(extracurricular.title) : true) &&
      (extracurricular.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        extracurricular.tags.some((tag) => tag.toLowerCase().includes(searchValue.toLowerCase())))
  );

  return (
    <div className="flex size-full no-scrollbar max-h-[92vh] min-h-[92vh] mt-[8vh] bg-gradient-to-b from-[#126954] via-white to-white">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-full">
          <div className="mx-auto w-[95%] md:w-[97.5%] my-3 md:my-5 xl:my-8">
            <div className="flex flex-row w-full bg-white border-2 rounded-lg justify-center shadow-xl space-x-3 md:space-x-6 px-3 md:px-6 xl:px-12 py-2 md:py-3">
              <input
                type="text"
                placeholder="Search an EC or Category..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-white text-gray-900 border-2 py-2 my-[1vh] w-[70%] md:w-[80%] rounded-md shadow-xl px-3 md:px-6 xl:px-12 ring-0"
              />
              <label className="flex justify-center items-center space-x-2 md:space-x-4">
                <input type="checkbox" className="size-4" onChange={() => setShowBookmarks(!showBookmarks)} />
                <p className="text-base md:text-lg md:text-nowrap text-center">&nbsp;View Bookmarks</p>
              </label>
            </div>
          </div>
          <div className="h-full max-h-full overflow-y-scroll no-scrollbar scroll-smooth">
            {filteredExtracurriculars.length === 0 && (
              <div className="flex justify-center items-center h-[50vh] flex-col text-[#126954] text-lg md:text-2xl font-bold text-center">
                <p className="py-3">No Extracurriculars Found</p>
                <p>
                  Something missing? Add an extracurricular{' '}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdao57RZAkxMa1h4opDt5ELtLEY9ZNBO-MFzWKA-yqz_VP4Vg/viewform?usp=sf_link"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    here
                  </a>
                </p>
              </div>
            )}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[97.5%] mx-auto">
              {filteredExtracurriculars.map((extracurricular) => (
                <div
                  key={extracurricular.taitle}
                  className="flex flex-col items-center bg-white border-2 rounded-lg w-full mx-auto mb-2 md:mb-3 text-center"
                >
                  <div className="w-full">
                    <h1 className="text-[#126954] text-lg md:text-xl xl:text-2xl py-2 md:py-3">
                      <span className="font-bold">SCIOTO</span> CONNECT
                    </h1>
                    <h1 className="text-[#126954] text-2xl md:text-3xl lg:text-4xl font-bold pt-2 pb-3 xl:w-[97.5%] mx-auto">
                      {extracurricular.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl py-2 px-2"> {extracurricular.description}</p>
                  </div>
                  <div className="flex items-center justify-center w-full md:w-auto md:justify-end m-4 md:m-6 space-x-3 md:space-x-4">
                    <p
                      className="text-base md:text-lg bg-[#126954] text-white px-4 py-1 md:px-5 md:py-2 rounded-full flex items-center justify-center transition duration-300 hover:bg-opacity-80"
                      onClick={() => openInfoModal(extracurricular)}
                    >
                      More Info
                      <CiCircleInfo className="ml-1 md:ml-2 size-6 md:size-8" />
                    </p>
                    <div
                      className={`rounded-full p-2 md:p-3 border hover:cursor-pointer ease-in-out duration-300 ${
                        bookmarks.hasOwnProperty(extracurricular.title)
                          ? ' hover:md:bg-opacity-80 text-white border-white bg-[#126954]'
                          : 'hover:border-[#126954] bg-opacity-20 hover:text-[#126954]'
                      }`}
                      onClick={() => toggleBookmark(extracurricular.title)}
                    >
                      <CiBookmark className="text-lg md:text-xl xl:text-2xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isInfoModalOpen && <InfoModal extracurricularData={selectedExtracurricular} onClose={closeInfoModal} />}
    </div>
  );
};

export default Display;
