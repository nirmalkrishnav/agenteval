import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Sidebar Content */}
      <div className="flex-1">
        <nav className="p-4">
          <div className="flex items-center p-3 text-sm text-gray-700 rounded hover:bg-gray-100 cursor-pointer">
            <svg className="w-5 h-5 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
