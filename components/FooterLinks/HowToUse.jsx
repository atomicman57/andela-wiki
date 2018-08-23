import React, { Fragment } from 'react';
import TopNav from '../Navigation/TopNav.jsx';
import SideNav from '../Navigation/SideNav.jsx';
import Footer from '../Footer.jsx';

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
      </div>
      <div className="articleRight" style={{marginTop:"3%", padding:"20px"}}>
        <h2>How to use</h2>
        <p>
          Quo debet vivendo ex. Qui ut admodum senserit partiendo. Id adipiscing disputando eam,
          sea id magna pertinax concludaturque. Ex ignota epicurei quo, his ex doctus delenit
          fabellas, erat timeam cotidieque sit in. Vel eu soleat voluptatibus, cum cu exerci
          mediocritatem. Malis legere at per, has brute putant animal et, in consul utamur usu.
        </p>
      </div>
      <Footer />
    </div>
  </div>
);
