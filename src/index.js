import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




// Add to Home Screen
// Add to Home Screen, sometimes referred to as the web app install prompt, makes it easy for users to install your Progressive Web App on their mobile or desktop device. After the user accepts the prompt, your PWA will be added to their launcher, and it will run like any other installed app.

// Chrome handles most of the heavy lifting for you, and on Android, Chrome will generate a WebAPK, creating an even more integrated experience for your users.

// What are the criteria?
// In order for a user to be able to install your Progressive Web App, it needs to meet the following criteria:

// The web app is not already installed
// Meets a user engagement heuristic (currently, the user has interacted with the domain for at least 30 seconds)
// Includes a web app manifest that includes:
// short_name or name
// icons must include a 192px and a 512px sized icons
// start_url
// display must be one of: fullscreen, standalone, or minimal-ui
// Served over HTTPS (required for service workers)
// Has registered a service worker with a fetch event handler
// When these criteria are met, Chrome will fire a beforeinstallprompt event that you can use to prompt the user to install your Progressive Web App.
