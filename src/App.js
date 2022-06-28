import React, { Component } from 'react';
import './assets/App.css';
import Footer from './components/layout/footer';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import Details from './pages/Details';
import { ProtectedRoute } from './decorator/auth/ProtectedRoute';
import Navbar from './components/layout/navbar';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar />
            <div className="page-layout__content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listing" element={<Listing />} />
                <Route path={"/details/:user"} element={<ProtectedRoute component={Details} />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}