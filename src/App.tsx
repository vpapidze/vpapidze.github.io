import React from 'react';
import { Layout } from './components/layout';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';

function App() {
  return (
    <Layout sidebar={<Sidebar />} main={<Main />} />
  );
}

export default App;
