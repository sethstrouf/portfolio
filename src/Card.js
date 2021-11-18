import React from 'react';

const Card = ({ image, alt, summary, tech, pageUrl, codeUrl, optUrl, children} ) => {
  return ( 
    <div className="h-48 lg:h-60 xl:h-84
                    mx-auto grid grid-cols-12 grid-rows-6 
                    w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12
                  bg-white rounded-md shadow-md overflow-hidden
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    2xl:text-3xl hover:shadow-xl hover:scale-105 transform">

      <div className="col-span-4 row-span-6 aspect-w-2 aspect-h-3 border-r-2 border-gray-500 pr-2">
        <a href={pageUrl}>
          <img src={`/img/${image}`} alt={alt}
              className="object-cover h-full"></img>
        </a>
      </div>

      <div className="col-span-8 row-span-1 text-xl flex justify-center items-center 
                      sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl">
        <p>
          <strong>{children}</strong>
        </p>
      </div>

      <div className="col-span-8 row-span-2 flex justify-center items-center ">
        <p>
          {summary}
        </p>
        <p>
          <a href={optUrl} className="underline hover:text-gray-500 
                                      text-sm 2xl:text-xl">
            {optUrl}
          </a>
        </p>
      </div>

      <div className="col-span-8 row-span-2 px-0.5
                      flex flex-col justify-center items-center">

        <p><em>{tech}</em></p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer
                       text-green-700">
        <p>
          <a href={pageUrl} className="font-bold">Link to Site</a>
        </p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer
                       text-green-700">
        <p>
        <a href={codeUrl} className="font-bold">Go to Code</a>
        </p>
      </div>
      
    </div>
  )
}

export default Card;
