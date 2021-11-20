import React from 'react';

const MainHeader = ({ children }) => {
  return (
    <h2 className="serif mt-12 lg:mt-24 mx-4 md:mx-8 xl:mx-12 
                   border-b border-green-700 text-left 
                   text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
      {children}
    </h2>
  )
}

export default MainHeader;
