import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="pagefooter">
    <div className="footerlinks">
      <Link to="/motivation">
        Motivation
      </Link>
      <Link to="/how-to-use">
        How to use
      </Link>
      <Link to="/report-bug">
        Report a Bug
      </Link>
      <a href="https://github.com/atomicman57/andela-wiki" target="blank">
        Contribute
      </a>
    </div>
  </div>
);
