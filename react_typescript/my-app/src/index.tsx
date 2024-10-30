import React from 'react';
import ReactDOM from 'react-dom/client';
import Ex2 from './components/ex2/Ex2';
// import Ex1 from './components/ex1/Ex1';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Ex1 /> */}
    <Ex2 />
  </React.StrictMode>
);

