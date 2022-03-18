import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

const root = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);

// <Routes>
//   <Route path="/" element={<App />}>
//     <Route path="home" element={<Home />} />
//     <Route path="about" element={<About />} />
//   </Route>
// </Routes>
