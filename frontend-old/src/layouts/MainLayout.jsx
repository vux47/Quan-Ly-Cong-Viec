import React from 'react';
import Appnav from '../components/Appnav';
import Footer from '../components/Footer';

function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <Appnav />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
