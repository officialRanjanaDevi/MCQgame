import React from 'react';
import './LoadingBox.css';

const LoadingBox = () => {
  const options = ['A', 'B', 'C', 'D']; 
  
  return (
    <div className="p-4 w-2/5 mt-4">
      <div className="loader">
        <div className="wrapper flex flex-col items-center">
          <div className="line-4 rounded-md"></div>
          <div className="line-3 rounded-md mt-2"></div>
        </div>
      </div>

      
      {options.map((option, index) => (
        <div className="option-loader my-2" key={index}>
          <div className="wrapper items-center flex">
            <p className="px-2 text-black mr-4 rounded-sm font-bold bg-neutral-100">
              {option}
            </p>
            <div className="line-3 rounded-md mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingBox;
