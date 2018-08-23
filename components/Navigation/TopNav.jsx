import React, { Fragment } from 'react';

const test = false;
export default () => (
  <div className="headerLinks">
    { test &&
      <Fragment>
      <a href="/profile" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
      Username
    </a>
    <a href="/sandbox" style={{paddingRight:"15px"}}>
      Sandbox
    </a>
    </Fragment>
  }
  { !test &&
    <Fragment>
    <span className="user">
      Not logged in
    </span>
    <a href="/login" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
      Log in
    </a>
    <a href="/contributions">
      Contributions
    </a>
    </Fragment>
  }
  </div>
);
