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
    <h3>Featured Articles</h3>
    <ul>
      <li>
        <Link to="/places-and-events">
          Places & Events
        </Link>
      </li>
      <li>
        <Link to="/biographies">
          Biographies
        </Link>
      </li>
      <li>
        <Link to="/buzz-word">
          Buzz words
        </Link>
      </li>
    </ul>
    <h3>Helpful Links</h3>
    <ul>
      <li>
        <Link to="/motivation">About</Link>
      </li>
      <li>
        <Link to="https://github.com/atomicman57/andela-wiki">Contributing</Link>
      </li>
      <li>
        <Link to="/how-to-use">How to use</Link>
      </li>
    </ul>
  </div>
</div>
);
