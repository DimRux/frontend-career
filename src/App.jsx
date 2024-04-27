import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Main from './pages/main/Main';

const App = () => {
  const [currentPage, setCurrentPage] = useState('/');
  return <Layout>{currentPage === '/' && <Main />}</Layout>;
};

export default App;
