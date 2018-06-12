import React, { Component } from 'react';
import Router from 'next/router';

export default class Index extends Component {
  static getInitialProps (ctx) {
    const isServer = !!ctx && !!ctx.req;

    // redirect to topTwentyAlbums by default
    if (isServer) {
        ctx.res.writeHead(301, {Location: `/top-twenty`}); // 301 - permanent URL redirection
        ctx.res.end()
    } else {
        Router.push(`/top-twenty`); 
    }
  }
}