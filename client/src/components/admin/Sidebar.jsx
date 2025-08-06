import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
      
      <NavLink
        end
        to="/admin"
        className={({ isActive }) =>
          `relative flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive ? "bg-primary/10" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Active indicator */}
            {isActive && <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-sm"></span>}

            {/* Icon and label */}
            <img src={assets.home_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Dashboard</p>
          </>
        )}
      </NavLink>
         <NavLink
        to="/admin/AddBlog"
        className={({ isActive }) =>
          `relative flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive ? "bg-primary/10" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Active indicator */}
            {isActive && <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-sm"></span>}

            {/* Icon and label */}
            <img src={assets.add_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Add Blogs</p>
          </>
        )}
      </NavLink>


       <NavLink
        to="/admin/ListBlog"
        className={({ isActive }) =>
          `relative flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive ? "bg-primary/10" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Active indicator */}
            {isActive && <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-sm"></span>}

            {/* Icon and label */}
            <img src={assets.list_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Blog List</p>
          </>
        )}
      </NavLink>

         <NavLink
        to="/admin/Comments"
        className={({ isActive }) =>
          `relative flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${
            isActive ? "bg-primary/10" : ""
          }`
        }
      >
        {({ isActive }) => (
          <>
            {/* Active indicator */}
            {isActive && <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-sm"></span>}

            {/* Icon and label */}
            <img src={assets.comment_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Comments</p>
          </>
        )}
      </NavLink>


    </div>
  );
};

export default Sidebar;
