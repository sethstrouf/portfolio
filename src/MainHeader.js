import React from 'react';

const MainHeader = ({ children }) => {
  return (
    <h2 className="mt-12 mb-6 mx-4 border-b border-green-700 text-left 
                   text-xl md:text-2xl xl:text-3xl">
      {children}
    </h2>
  )
}

export default MainHeader;
