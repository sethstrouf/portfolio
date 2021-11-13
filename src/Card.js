import React from 'react';

//PROPS:
  //backgroundImage
  //title
  //summary
  //skills array?
  //page url
  //code url

const Card = ({ image, summary, tech, pageUrl, codeUrl, children} ) => {
  return ( 
    <div className="h-48 mx-auto w-11/12 grid grid-cols-12 grid-rows-6 bg-white
                    border border-gray-100 rounded-lg shadow-lg overflow-hidden">

      <div className="col-span-4 row-span-6 border-r border-gray-200
                      aspect-w-2 aspect-h-3">
        <img src={`/img/${image}`} alt="Blog project"
             className="object-cover"></img>
      </div>

      <div className="col-span-8 row-span-1 text-xl bg-gray-200
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

      <div className="col-span-8 row-span-3 pt-1 text-sm text-center">
        <p className="underline font-bold">Tech Used</p>
        <p>{tech}</p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      border-r-2 border-gray-200 hover:bg-green-100">
        <p>
          <a href={pageUrl}>Link to Site</a>
        </p>
      </div>

      <div className="col-span-4 row-span-1 flex justify-center items-center
                      hover:bg-green-100">
        <p>
        <a href={codeUrl}>Go to Code</a>
        </p>
      </div>
      
    </div>
  )
}

export default Card;
