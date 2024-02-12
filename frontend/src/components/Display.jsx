import React, { useState, useEffect } from 'react';
import InfoModal from './InfoModal';
import { CiCircleInfo } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';

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
    <div className="flex size-full no-scrollbar max-h-[92vh] min-h-[92vh] mt-[8vh] bg-gradient-to-b from-[#126954] via-white to-white select-none">
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col w-full">
          <div className="mx-auto w-[95%] md:w-[97.5%] my-5 md:my-7 xl:my-10">
            <div className="flex flex-row w-full bg-white border-2 rounded-lg justify-center shadow-xl space-x-5 md:space-x-10 px-4 md:px-8 xl:px-16">
              <input
                type="text"
                placeholder="Search an EC or Category..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-white text-gray-900 border-2 py-2 my-[2.5vh] w-[75%] md:w-[85%] rounded-md shadow-xl px-4 md:px-8 xl:px-16 ring-0"
              />
              <label className="flex justify-center items-center space-x-3">
                <input type="checkbox" className="size-4" onChange={() => setShowBookmarks(!showBookmarks)} />
                <p className="text-lg md:text-xl md:text-nowrap text-center">&nbsp;View Bookmarks</p>
              </label>
            </div>
          </div>
          <div className="h-full max-h-full overflow-y-scroll no-scrollbar scroll-smooth">
            {filteredExtracurriculars.length === 0 && (
              <div className="flex justify-center items-center h-[50vh] flex-col text-[#126954] text-xl md:text-4xl font-bold text-center">
                <p className="py-4">No Extracurriculars Found</p>
                <p>
                  Something missing? Add an extracurricular{' '}
                  <a href="https://example.com" target="_blank" rel="noreferrer" className="underline">
                    here
                  </a>
                </p>
              </div>
            )}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[97.5%] mx-auto">
              {filteredExtracurriculars.map((extracurricular) => (
                <div
                  key={extracurricular.title}
                  className="flex flex-col items-center bg-white border-2 rounded-lg w-full mx-auto mb-2 md:mb-4 text-center"
                >
                  <div className="w-full">
                    <h1 className="text-[#126954] text-2xl xl:text-3xl py-2 md:py-4">
                      <span className="font-bold">SCIOTO</span> CONNECT
                    </h1>
                    <h1 className="text-[#126954] text-3xl md:text-4xl lg:text-5xl font-bold pt-2 pb-4">
                      {extracurricular.title}
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl py-2 px-2"> {extracurricular.description}</p>
                  </div>
                  <div className="flex items-center justify-center w-full md:w-auto md:justify-end m-6 md:m-10 space-x-4">
                    <p
                      className="text-lg md:text-xl bg-[#126954] text-white px-6 py-2 md:px-8 md:py-3 rounded-full flex items-center justify-center transition duration-300 hover:bg-opacity-80"
                      onClick={() => openInfoModal(extracurricular)}
                    >
                      More Info
                      <CiCircleInfo className="ml-2 size-8" />
                    </p>
                    <div
                      className={`rounded-full p-3 md:p-4 border-2 hover:cursor-pointer ease-in-out duration-300 ${
                        bookmarks.hasOwnProperty(extracurricular.title) ? 'bg-[#126954] hover:bg-opacity-80' : ''
                      }`}
                      onClick={() => toggleBookmark(extracurricular.title)}
                    >
                      <CiHeart
                        fill={bookmarks.hasOwnProperty(extracurricular.title) ? '#FFFFFF' : ''}
                        className="text-3xl md:text-4xl text-[#126954]"
                      />
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
