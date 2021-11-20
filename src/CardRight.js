import React from 'react';

const CardRight = ({ image, alt, summary, tech, pageUrl, codeUrl, optUrl, children} ) => {

  const renderSummary = () => {
    if (optUrl) {
      // return two divs with 1 row each
      return <>
            <div className="col-start-1 col-span-8 row-span-1 flex justify-center items-center">
              <p>
                {summary}
              </p>
            </div>
            <div className="col-start-1 col-span-8 row-span-1  flex justify-center items-center">
              <p>
                (<a href={optUrl} className="hover:text-gray-500 focused">
                  {optUrl}
                 </a>)
              </p>
            </div>
            </>
    } else {
      // return one div taking up both rows
      return <div className="col-start-1 col-span-8 row-span-2 flex justify-center items-center">
        <p>
          {summary}
        </p>
      </div>

    }
  }

  return ( 
    <div className="h-48 lg:h-60 xl:h-72 w-10/12 leading-none
                    mx-auto grid grid-cols-12 grid-rows-6
                  bg-white rounded-md overflow-hidden shadow
                    text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
                    2xl:text-3xl hover:shadow-lg scale-hover">

      <div className="col-start-1 col-span-8 row-span-2 text-xl flex justify-center items-center 
                      serif text-green-700
                      sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        <p>
          <strong>{children}</strong>
        </p>
      </div>
   
      {/* render one div or two based on optUrl */}
      {renderSummary()}

      <div className="col-start-1 col-span-8 row-span-1 px-0.5 
                      flex flex-col justify-center items-center">

        <p><em>{tech}</em></p>
      </div>

      <div className="col-start-1 col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer
                       text-green-700">
        <p>
          <a href={pageUrl} className="font-bold focused">Go to Site</a>
        </p>
      </div>

      <div className="col-start-5 col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100 cursor-pointer text-green-700">
        <p>
        <a href={codeUrl} className="font-bold focused">Go to Code</a>
        </p>
      </div>

      <div className="col-end-13 col-span-4 row-start-1 row-span-6">
        <a href={pageUrl}>
          <img src={`/img/${image}`}
               className="w-full h-full object-top object-cover"
               alt={alt} />
        </a>
      </div>

    </div>
  )
}

export default CardRight;
