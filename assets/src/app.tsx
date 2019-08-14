// assets/js/app.tsx

import '../css/app.css';

import 'phoenix_html';

import socket from './socket';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './Root';

let channel = socket.channel('light_switch:lobby', {});
channel
  .join()
  .receive('ok', resp => {
    console.log('Joined successfully', resp);
  })
  .receive('error', resp => {
    console.log('Unable to join', resp);
  });

// This code starts up the React app when it runs in a browser. It sets up the routing
// configuration and injects the app into a DOM element.
ReactDOM.render(<Root />, document.getElementById('react-app'));
