import React from 'react';
import PropTypes from 'prop-types';
import news from '../Images/news.png';

export default function Card({ data, img, description }) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-2">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:translate-y-[-3px] hover:shadow-xl m-2 card">
        <img src={img ? img : news} alt={data.title} className="w-full h-24 object-cover" />
        <div className="p-3">
          <h5 className="text-sm font-bold text-gray-900 text-center card-title">{data.title.slice(0, 30)}</h5>
          <p className="text-gray-700 mt-1 text-xs card-content">{description ? description.slice(0, 70) : "Update"}</p>
          <div className=" bg-white mt-3 text-right card-footer">
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-md shadow-md transition-all duration-300 hover:bg-blue-700 card-button"
            >
              Read Full Article
            </a>
          </div>
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
