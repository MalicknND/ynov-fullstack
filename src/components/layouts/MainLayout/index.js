import React from 'react';
import Header from '@/components/partials/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* on affiche les composants enfants */}
      {children}
    </>
  );
};

export default MainLayout;
