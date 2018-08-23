import React, { Fragment } from 'react';

export default () => (
  <div className="sidebar">
      <div className="logo">
        <a href="/">
        <img
          src="https://media.cdn.gradconnection.com/uploads/c4aa0069-1948-440f-bace-0792744eea59-andela_logo.png"
          alt="andela-wikitionary"
        />
      </a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">Main page</a>
          </li>
          <li>
            <a href="#">Contents</a>
          </li>
          <li>
            <a href="#">Featured content</a>
          </li>
        </ul>
        <h3>Interaction</h3>
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portal</a>
          </li>
        </ul>
        <h3>Interaction</h3>
        <ul>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portal</a>
          </li>
        </ul>
      </div>
    </div>
);
