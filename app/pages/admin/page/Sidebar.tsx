import React from 'react';
import { FiHome, FiPackage, FiUsers } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <div className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-gray-700"><FiHome className="inline-block mr-2"/> Dashboard</li>
          <li className="p-4 hover:bg-gray-700"><FiPackage className="inline-block mr-2"/> Products</li>
          <li className="p-4 hover:bg-gray-700"><FiUsers className="inline-block mr-2"/> Customers</li>
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700">Log out</div>
    </div>
  );
};

export default Sidebar;
