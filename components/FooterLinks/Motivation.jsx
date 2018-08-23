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
        <h2>The Problem</h2>
        <p>
          At Andela, we generate tons of information and custom and unique buzz words by the minute.
          Keeping tabs on them becomes inevitably hard to keep up with especially as we <a href="https://andela.com/join/">scale</a>.
          Likewise, we also have tons of ways to access information (google docs, drive, slack channels,
          Andela products even social media) information is everywhere phewww. <br /> <br />
          
          <h2>Eureka!</h2>
          <ul>
            <li style={{padding:"7px"}}>
              - What if there is an online resource where one can go check the meaning of a
              new buzz word from the learning department at Andela?
            </li>
            <li style={{padding:"7px"}}>
              - What if someone wrote a wiki about the first country director of Lagos and I
              have never met him but I am able to learn about him from what fellows and employees
              who knew him wrote about him while he was with Andela?
            </li>
            <li style={{padding:"7px"}}>
              - A good one, I just heard a new word from <a href="https://twitter.com/Andela">
              Andela's tweets</a>, whay if I can come to this online resource to learn more about that word?
            </li>
            <li style={{padding:"7px"}}>
              - What if there is just this single place I can go to find so much information
              without having to browse slack channels, what if i can create a wiki that has not
              been created about a subject I am knowledgeable of and every other employee in the
              fellowship is a contributor?
            </li>
            <li style={{padding:"7px"}}>
              - What if an aspiring Andelan is able to learn as much as they can about Andela
              from existing Andelans?
            </li>
            <li style={{padding:"7px"}}>
              - What if, what if ...</li>
          </ul>
        </p>
      </div>
      <Footer />
    </div>
  </div>
);
