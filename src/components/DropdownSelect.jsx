import React from 'react';

const DropdownSelect = () => {
  return (
    <div className="custom-select" style={{ width: '150px' }}>
      <select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
      </select>
    </div>
  );
};

export default DropdownSelect;
