import React from 'react';

const SearchIcon= ({ url, imageSrc, altText }) => {
  return (
    <a
      href={url}
      className="inline-block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <img src={imageSrc} alt={altText} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 hover:bg-opacity-70 transition duration-300">
        <span className="text-lg font-semibold">{altText}</span>
      </div>
    </a>
  );
};

export default SearchIcon;