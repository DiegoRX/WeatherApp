import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <section className='Layout'>
    <>
      <Header />
    </>
    <main>
      {children}
    </main>
  </section>
);

export default Layout;
