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
      <div className="articleRight" style={{marginTop:"3%", padding:"20px", width:"95%"}}>
        <h2 style={{borderBottom:"1px solid #cccccc", width:"13%", padding:"10px"}}>Report a bug</h2>
        <div className="container">
          <form action="/action_page.php">
            Full name: <input type="text" name="firstname" value="" /><br /><br />
            Bug type: <select>
              <option>
                UI/UX
              </option>
              <option>Broken functionality</option>
            </select>
            <br /><br />
            Priority type: <select>
              <option>
                Low
              </option>
              <option>
                Medium
              </option>
              <option>
                High
              </option>
            </select>
            <br /><br />
            Expected behavior: <br />
            <textarea rows="4" cols="50">

            </textarea>
            <br /><br />
            Actual behavior: <br />
            <textarea rows="4" cols="50">

            </textarea>
            <br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);
