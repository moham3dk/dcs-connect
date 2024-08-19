import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InfoModal from './InfoModal';
import { FaInfoCircle, FaRegBookmark } from 'react-icons/fa';

const Display = ({ schoolName, schoolLogo, extracurricularData, formLink }) => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [selectedExtracurricular, setSelectedExtracurricular] = useState(null);
  const [bookmarksShowing, setBookmarksShowing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState([]);
  const bookmarkKey = `bookmarks_${schoolName}`;

  useEffect(() => {
    const storedBookmarks = localStorage.getItem(bookmarkKey);
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    } else {
      localStorage.setItem(bookmarkKey, JSON.stringify([]));
    }
  }, [bookmarkKey]);

  const openInfoModal = (extracurricular) => () => {
    setSelectedExtracurricular(extracurricular);
    setIsInfoModalOpen(true);
  };

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  };

  const bookmarkExtracurricular = (extracurricular) => {
    if (bookmarks.includes(extracurricular)) {
      setBookmarks(bookmarks.filter((ec) => ec !== extracurricular));
      return;
    }

    setBookmarks([...bookmarks, extracurricular]);
  };

  // filter extracurriculars based on search query and bookmarks if they are showing
  const filteredExtracurriculars = extracurricularData.filter(
    (ec) =>
      (bookmarksShowing ? bookmarks.includes(ec.title) : true) &&
      (ec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ec.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  return (
    <>
      <div className="h-screen w-screen flex flex-col bg-gradient-to-b from-primary via-white to-primary">
        {/* Header with school name and logo */}
        <header className="bg-white flex justify-center md:justify-between items-center py-3 px-10 md:m-4 md:mb-2 md:rounded-lg border-2 border-gray-300">
          <Link to="/" className="flex items-center space-x-4">
            <img src={schoolLogo} alt="Logo" className="h-10" />
            <h1 className="text-2xl md:text-3xl uppercase text-primary">
              <span className="font-bold">{schoolName}</span> Connect
            </h1>
          </Link>
          <button className="hidden md:block">
            <a
              href={formLink}
              className="text-xl uppercase bg-primary text-white rounded-lg p-2 font-bold hover:bg-opacity-80 ease-in-out duration-300"
            >
              Add an extracurricular
            </a>
          </button>
        </header>
        {/* Main content */}
        <div className="flex-1 bg-white md:rounded-lg md:m-4 md:mt-2 md:border-2 md:border-gray-300 p-2 md:p-4 overflow-hidden">
          {/* Search bar & bookmark checkbox */}
          <div className="flex flex-col md:flex-row justify-between items-center m-4">
            <input
              type="text"
              placeholder="Search an EC or Category..."
              className="bg-white text-gray-900 border-2 w-full md:w-4/6 p-2 border-gray-300 rounded-lg ring-0 shadow-xl mb-2 md:mb-0"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label className="flex items-center space-x-2 md:space-x-4">
              <input
                type="checkbox"
                className="h-4 w-4"
                onChange={() => {
                  setBookmarksShowing(!bookmarksShowing);
                }}
              />
              <p className="text-base md:text-lg text-center">&nbsp;View Bookmarks</p>
            </label>
          </div>
          {/* EC cards */}
          <div className="h-[90%] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 p-2 md:p-4">
              {filteredExtracurriculars.map((ec, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-white rounded-lg border-2 border-gray-300 p-4 h-64 items-center justify-center shadow-xl"
                >
                  <h1 className="text-center text-primary font-bold text-xl md:text-2xl mb-2">{ec.title}</h1>
                  <p className="text-center text-gray-900 text-base md:text-lg mb-4">{ec.description}</p>
                  <div className="flex space-x-4">
                    <h1 onClick={openInfoModal(ec)} target="_blank" rel="noopener noreferrer">
                      <button className="flex items-center text-white p-2 rounded-xl bg-primary hover:bg-opacity-80 ease-in-out duration-300">
                        <FaInfoCircle className="mr-2" />
                        More Info
                      </button>
                    </h1>
                    <button
                      className={`rounded-full border-2 border-gray-300 p-2 px-3 ease-in-out duration-300 ${
                        bookmarks.includes(ec.title)
                          ? ' bg-primary hover:bg-opacity-80 border-primary text-white border-1 border-opacity-80'
                          : 'hover:border-primary hover:text-primary'
                      }`}
                      onClick={() => {
                        bookmarkExtracurricular(ec.title);
                      }}
                    >
                      <FaRegBookmark />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isInfoModalOpen && <InfoModal extracurricular={selectedExtracurricular} onClose={closeInfoModal} />}
    </>
  );
};

export default Display;
