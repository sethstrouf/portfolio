import React from 'react';

const MainHeader = ({ children }) => {
  return (
    <h2 className="serif mt-12 mb-6 mx-4 border-b border-green-700 text-left 
                   text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl">
      {children}
    </h2>
  )
}

export default MainHeader;
