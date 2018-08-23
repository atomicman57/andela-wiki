import React, { Fragment } from 'react';
import TopNav from '../Navigation/TopNav.jsx';
import SideNav from '../Navigation/SideNav.jsx';
import Footer from '../Footer.jsx';
import {Link} from 'react-router-dom';

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
        <h2>Be Authentic</h2>
        <p>
          Before you start a new sandbox, be sure to do a search for the subject you want to write about.
          Proceed to write only wikis that make sense in wikitionary. As an example, writting about how to set up
          a node server or any other technical post does not make sense here or does it? The answer is NO. But a
          subject about class one fellows makes a ton of sense. Be authentic.
        </p>
        <h2>Be Thorough</h2>
        <p>
          Due diligence. Ensure that you have enough content and reference links. Avoid starting a wiki and leaving
          it empty. Do due dilogence to ensure you have sensible content before starting a wiki. This increases
          your credibility among other contributors. <Link to="/">See example wiki</Link>
        </p>
        <h2>Be Your Fellow's Keeper</h2>
        <p>
          You can contribute to make this resource more authentic by helping to improve existing wikis. Be on
          the look out for typographical errors, spelling errors, broken links, flag inapproriate contents, flag
          insufficient contents, add contents and many more
        </p>
        <h2>Markdown Language</h2>
        <p>
          This is the official language of Wikitionary. This is very similar to markdown you are used to on github.
          Jump right in this documentaion to brush up on how to create a good wiki
          <Link to="/getting-started"> using the offcial markdown language</Link>.
        </p>
      </div>
      <Footer />
    </div>
  </div>
);
