import React from 'react';


const LeftComponent = ({ convertedAmount }) => {
  return (
    <div className="left-component">
      <h2>Left Component</h2>
      <div>
        <p>Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
};

export default LeftComponent;
