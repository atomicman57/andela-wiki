import React, { Fragment } from 'react';
import SideNav from './Navigation/SideNav.jsx';
import TopNav from './Navigation/TopNav.jsx';
import Footer from './Footer.jsx';
import Article from './Article.jsx';

export default () => (
  <div className="wrapAll clearfix">
    <SideNav />
    <div className="mainsection">
      <TopNav />
      <div className="tabs clearfix">
        <div id="simpleSearch">
          <input type="text" name="searchInput" id="searchInput" placeholder="Search Wikipedia" size={12} />
          <div id="submitSearch" />
        </div>
        <div className="tabsRight">
          <ul>
            <li>
              <a href="#" className="active">Read</a>
            </li>
            <li>
              <a href="#">View history</a>
            </li>
          </ul>
        </div>
      </div>
      <Article />
      <Footer />
    </div>
  </div>
);
