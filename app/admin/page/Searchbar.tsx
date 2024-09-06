import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow">
            <input
                type="text"
                placeholder="Search..."
                className="p-2 border rounded-md w-full max-w-xs"
            />
        </div>
    );
};

export default SearchBar;
