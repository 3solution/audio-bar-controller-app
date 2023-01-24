import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoute from './routes/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <MainRoute></MainRoute>
    </BrowserRouter>
  );
}

export default App;
