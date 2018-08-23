import React, { Fragment } from 'react';

const test = false;
export default () => (
  <div className="headerLinks">
    { test &&
      <Fragment>
      <a href="#" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
      Username
    </a>
    <a href="#" style={{paddingRight:"15px"}}>
      Sandbox
    </a>
    </Fragment>
  }
  { !test &&
    <Fragment>
    <span className="user">
      Not logged in
    </span>
    <a href="#" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
      Log in
    </a>
    <a href="#">
      Contributions
    </a>
    </Fragment>
  }
  </div>
);
