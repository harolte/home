import React from "react";

const Header = () => {
  const handleNavigateToTaller = () => {
    window.location.href = 'https://main.d1grj6p2gqblae.amplifyapp.com/'; 
  };

  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div>
        Micro Frontend Header
      </div>
      <button
        className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleNavigateToTaller}
      >
        Ir a Taller
      </button>
    </div>
  );
};
export default Header;
