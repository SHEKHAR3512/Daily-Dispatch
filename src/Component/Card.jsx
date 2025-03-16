import React from 'react';
import PropTypes from 'prop-types';
import news from '../Images/news.png';

export default function Card({ data, img, description }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl animate-fadeIn">
      <img
        src={img ? img : news}
        alt={data.title}
        className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="p-5">
        <h5 className="text-lg font-semibold text-gray-800 text-center">
          {data.title.slice(0, 40)}
        </h5>
        <p className="text-gray-600 mt-3 text-base">
          {description ? description.slice(0, 90) : "Update"}
        </p>
        <div className="mt-4 text-right">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-blue-600  text-sm font-medium rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-700"
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  img: PropTypes.string,
  description: PropTypes.string,
};