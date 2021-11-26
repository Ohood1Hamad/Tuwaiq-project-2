import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// import provider
// import store

ReactDOM.render(
  // The provider will enable the child components to access the store
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  document.getElementById("root")
);