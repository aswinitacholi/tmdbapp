import React from "react";
import './Search.css';

export const Search = () => {
  return (
    <div className="search-field">
      <input type="search" name="search" id="search" placeholder="Search Movie Title..." />
      <div className="search-suggestion">
        <ul>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  );
};
