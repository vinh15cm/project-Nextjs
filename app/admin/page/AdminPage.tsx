import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import SearchBar from './Searchbar';
import Dashboard from './Dashboard';

const AdminPage = () => {
  const { logout:any } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <SearchBar />
        <Dashboard />
        <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded-md m-4">Đăng xuất</button>
      </div>
    </div>
  );
};

export default AdminPage;
