import React from 'react';

const Card = ({ image, alt, summary, tech, pageUrl, codeUrl, children} ) => {
  return ( 
    <div className="h-48 lg:h-60 xl:h-72
                    mx-auto grid grid-cols-12 grid-rows-6 
                    w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12
                  bg-white rounded shadow-md overflow-hidden
                    border border-gray-200
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    2xl:text-3xl">

      <div className="col-span-4 row-span-6 aspect-w-2 aspect-h-3">
        <a href={pageUrl}>
          <img src={`/img/${image}`} alt={alt}
              className="object-cover h-full"></img>
        </a>
      </div>

      <div className="col-span-8 row-span-1 text-xl bg-green-700 text-gray-50
                      flex justify-center items-center
                      sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        <p>
          <strong>{children}</strong>
        </p>
      </div>

      <div className="col-span-8 row-span-1 pt-2">
        <p>
          <em>{summary}</em>
        </p>
      </div>

      <div className="col-span-8 row-span-3 px-1
                      flex flex-col justify-center items-center">
        <p className="underline font-bold">Tech Used</p>
        <p>{tech}</p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      border-r-2 border-gray-100 hover:bg-green-100 cursor-pointer
                      underline text-green-700">
        <p>
          <a href={pageUrl}>Link to Site</a>
        </p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer
                      underline text-green-700">
        <p>
        <a href={codeUrl}>Go to Code</a>
        </p>
      </div>
      
    </div>
  )
}

export default Card;
