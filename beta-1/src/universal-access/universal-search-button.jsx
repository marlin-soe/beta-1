import React, { useState } from 'react';
import './styling/search-button.css'; // We'll define styles below

function UniversalSearchButton() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    
    <div className='stickySearchBar'>
        <div className="search-wrapper">
            <input
                type="text"
                className="search-input"
                placeholder="Search a person"
                value={inputValue}
                onChange={handleInputChange}
            />

            {inputValue.trim() !== '' && (
                <div className="search-dropdown">
                    <button className="search-option">Search Option 1</button>
                    <button className="search-option">Search Option 2</button>
                    <button className="search-option">Search Option 3</button>
                    <button className="search-option">Search Option 4</button>
                    <button className="search-option">Search Option 5</button>
                    <button className="search-option">Search Option 6</button>
                    <button className="search-option">Search Option 7</button>
                </div>
            )}

        </div>
    </div>
  );
}

export default UniversalSearchButton;
