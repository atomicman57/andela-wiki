import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

const loginGateway = process.env.loginGateway;
const baseUrl = process.env.baseUrl;

const test = false;
export default () => (
  <div className="headerLinks">
    { test &&
      <Fragment>
      <Link to="/profile" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
        Username
      </Link>
    <Link to="/sandbox" style={{paddingRight:"15px"}}>
      Sandbox
    </Link>
    </Fragment>
  }
  { !test &&
    <Fragment>
    <span className="user">
      Not logged in
    </span>
    {/* <Link to="/login" style={{borderRight:"1px solid #999999", paddingRight: "7px"}}>
      Log in
    </Link> */}
    <a style={{borderRight:"1px solid #999999", paddingRight: "7px"}}
        href={`${loginGateway}/login?redirect_url=${baseUrl}/`}
    >
    Log in
    </a>
    <Link to="/articles">
      Articles
    </Link>
    </Fragment>
  }
  </div>
);
