

import { FaStar } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';

const News = (props = {}) => {
    const { news } = props || {}
    console.log(news);




        const [isExpanded, setIsExpanded] = useState(false);
      
        const content = news.details;
      
        // Split content into words
        const words = content.split(" ");
        
        // Display content based on word count
        const displayedContent = isExpanded ? content : words.slice(0, 36).join(" ");
      
        const handleReadMore = () => {
            setIsExpanded(!isExpanded);
        }
    


    
  return (
    <div className=" mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 bg-base-300">
        <img
          src={news.thumbnail_url}
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
                  <h4 className="text-gray-800 font-semibold">{ news.author.name }</h4>
                  <p className="text-gray-500 text-sm">{ news.author.published_date }</p>
        </div>
      </div>

      {/* Title and Image */}
      <h2 className="px-4 text-lg font-bold text-gray-800">
        {news.title}
      </h2>
      <img
        src={news.image_url}
        alt="Thumbnail"
        className="w-full object-cover mt-2 px-4"
      />

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-500 text-sm">
          {displayedContent}
          {!isExpanded && words.length > 36 && "..."}
        </p>
        {words.length > 16 && (
          <button
            onClick={handleReadMore}
            className="text-blue-500 font-semibold mt-2 inline-block"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        {/* Rating */}
        <div className="flex items-center text-orange-400">
          <FaStar className="mr-1" />
                  <span className="font-semibold">{ news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center text-gray-500">
          <AiOutlineEye className="mr-1" />
                  <span>{ news.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
