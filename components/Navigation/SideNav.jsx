import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div className="sidebar">
    <div className="logo">
      <Link to="/">
        <img
          src="https://media.cdn.gradconnection.com/uploads/c4aa0069-1948-440f-bace-0792744eea59-andela_logo.png"
          alt="andela-wikitionary"
        />
      </Link>
  </div>
  <div className="navigation">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contributions">Contributions</Link>
      </li>
      <li>
        <Link to="/featured-contents">Featured content</Link>
      </li>
    </ul>
    <h3>Interaction</h3>
    <ul>
      <li>
        <Link to="/help">Help</Link>
      </li>
      <li>
        <Link to="/motivation">About</Link>
      </li>
    </ul>
  </div>
</div>
);
