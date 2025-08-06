import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
  const {title, description, category, image, _id} = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className='w-full h-full rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer bg-white border border-gray-100'
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className='w-full aspect-video object-cover hover:scale-105 transition-transform duration-300' 
        />
        <span className='absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm'>
          {category}
        </span>
      </div>
      <div className='p-4 sm:p-5'>
        <h5 className='mb-2 font-semibold text-gray-900 line-clamp-2 text-sm sm:text-base'>{title}</h5>
        <p 
          className='text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed' 
          dangerouslySetInnerHTML={{
            "__html": description.slice(0, 120) + (description.length > 120 ? '...' : '')
          }}
        />
      </div>
    </div>
  );
}

export default BlogCard;