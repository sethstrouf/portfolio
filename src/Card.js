import React from 'react';

const Card = ({ image, alt, summary, tech, pageUrl, codeUrl, optUrl, children} ) => {
  return ( 
    <div className="flex flex-col mx-auto 
                    w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12
                  bg-white rounded-md shadow-md overflow-hidden
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    2xl:text-3xl hover:shadow-xl hover:scale-105 transform">


      <div className="site-gray serif text-green-400 text-xl  
                      sm:text-lg md:text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl">
        <p>
          <strong>{children}</strong>
        </p>
      </div>

      <div className="h-2/6">
        <a href={pageUrl}>
          <img src={`/img/${image}`} alt={alt}
               className="w-full h-full object-cover object-top"></img>
        </a>
      </div>

      <div>
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

      <div className="px-0.5">

        <p><em>{tech}</em></p>
      </div>

      <div className="hover:bg-green-100 cursor-pointer
                       text-green-700">
        <p>
          <a href={pageUrl} className="font-bold">Link to Site</a>
        </p>
      </div>

      <div className="hover:bg-green-100 cursor-pointer
                       text-green-700">
        <p>
        <a href={codeUrl} className="font-bold">Go to Code</a>
        </p>
      </div>
      
    </div>
  )
}

export default Card;
