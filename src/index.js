// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client'; // for React 18 and above
import './index.css'; // your global styles (if any)
import App from './App'; // main component of your app

// Select the root element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
