import React from 'react';
import { Link } from 'react-router-dom';
import sciotoImage from '../data/images/scioto.jpeg';
import jeromeImage from '../data/images/jerome.jpeg';
import coffmanImage from '../data/images/coffman.jpeg';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <Link
        to="/scioto"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sciotoImage})` }}
        className="flex items-center justify-center text-4xl font-bold text-white bg-[#126954] hover:bg-white transform hover:scale-110 transition-all duration-300 ease-in-out w-full md:w-1/3 h-1/3 md:h-full bg-cover bg-center"
      >
        SCIOTO
      </Link>
      <Link
        to="/jerome"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${jeromeImage})` }}
        className="flex items-center justify-center text-4xl font-bold text-white bg-[#126954] hover:bg-white transform hover:scale-110 transition-all duration-300 ease-in-out w-full md:w-1/3 h-1/3 md:h-full bg-cover bg-center"
      >
        JEROME
      </Link>
      <Link
        to="/coffman"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coffmanImage})` }}
        className="flex items-center justify-center text-4xl font-bold text-white bg-[#126954] hover:bg-white transform hover:scale-110 transition-all duration-300 ease-in-out w-full md:w-1/3 h-1/3 md:h-full bg-cover bg-center"
      >
        COFFMAN
      </Link>
    </div>
  );
};

export default Home;
