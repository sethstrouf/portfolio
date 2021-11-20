import React from 'react';

const CardCopy = ({ image, alt, summary, tech, pageUrl, codeUrl, optUrl, children} ) => {

  const renderOptionalUrl = () => {
    if (optUrl) {
      return <p>
        ({optUrl})
      </p>
    }
  }

  return ( 
    <div className="h-48 lg:h-60 xl:h-84
                    mx-auto grid grid-cols-12 grid-rows-6 
                    w-11/12 sm:w-10/12 md:w-9/12 lg:w-9/12
                  bg-white rounded-md  overflow-hidden
                    border border-gray-400
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    2xl:text-3xl hover:shadow-lg transform">

      <div className="col-span-4 row-span-6">
        <a href={pageUrl}>
          <img src={`/img/${image}`}
               className="h-full object-cover hover:"
               alt={alt} />
        </a>
      </div>

      <div className="col-span-8 row-span-1 text-xl flex justify-center items-center 
                      serif text-green-700
                      sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p>
          <strong>{children}</strong>
        </p>
      </div>

      <div className="col-span-8 row-span-2 flex justify-center items-center ">
        <p>
          {summary}
        </p>
        {renderOptionalUrl()}
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

export default CardCopy;
