import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/Home';

const MainRoute: React.FC = () => (
  <MainLayout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<Navigate replace to='/' />} />
    </Routes>
  </MainLayout>
);

export default MainRoute;
