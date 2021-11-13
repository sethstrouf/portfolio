import React from 'react';

const Card = ({ image, alt, summary, tech, pageUrl, codeUrl, children} ) => {
  return ( 
    <div className="h-48 mx-auto grid grid-cols-12 grid-rows-6 
                    w-11/12 sm:w-10/12 md:w-9/12 lg:w-5/12 2xl:w-3/12
                  bg-white rounded-lg shadow-md overflow-hidden flex-grow">

      <div className="col-span-4 row-span-6 aspect-w-2 aspect-h-3">
        <img src={`/img/${image}`} alt={alt}
             className="object-cover"></img>
      </div>

      <div className="col-span-8 row-span-1 text-xl bg-green-700 text-gray-50
                      flex justify-center items-center">
        <p>
          <strong>{children}</strong>
        </p>
      </div>

      <div className="col-span-8 row-span-1 pt-2">
        <p>
          <em>{summary}</em>
        </p>
      </div>

      <div className="col-span-8 row-span-3 pt-1 px-1 text-sm 
                      flex flex-col justify-center items-center">
        <p className="underline font-bold">Tech Used</p>
        <p>{tech}</p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      border-r-2 border-gray-100 hover:bg-green-100 cursor-pointer
                      text-sm underline text-green-700">
        <p>
          <a href={pageUrl}>Link to Site</a>
        </p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer
                      text-sm underline text-green-700">
        <p>
        <a href={codeUrl}>Go to Code</a>
        </p>
      </div>
      
    </div>
  )
}

export default Card;
