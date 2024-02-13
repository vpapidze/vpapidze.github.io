import React from 'react';
import { Layout } from './components/layout';
import { Sidebar } from './components/sidebar';
import { Main } from './components/main';
import { Helmet } from 'react-helmet';

function App() {
  return (<>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
    <Layout sidebar={<Sidebar />} main={<Main />} />
  </>
  );
}

export default App;
