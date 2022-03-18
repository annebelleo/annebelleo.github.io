import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import {Outlet, NavLink} from 'react-router-dom';

export default function App() {
  return (
    <main className="container h-100 w-100 p-5 mt-5">
    <style>{`
      html, body, #root {
        height: 95%
      }
    `}
    </style>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <Footer />
      <Outlet/>
    </main>
  )
}
