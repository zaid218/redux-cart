import { Fragment } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import MainHeader from './components/Layout/MainHeader';

function App() {
  return (
    
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
