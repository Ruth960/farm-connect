import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div
    style={{backgroundColor: '#DCF7D0', color: '#000000', height: '100vh', width: '100vw'}}
    >
      <Header 
        links={[
          { title: 'Home', path: '/' },
          { title: 'About Us', path: '/about' },
          { title: 'Market Listings', path: '/market' },
          { title: 'Dashboards', path: '/dashboard' },
          { title: 'Cart', path: '/cart' }
        ]}
      />
      <Footer 
      />
      <main>{children}</main>
    </div>
  );
}