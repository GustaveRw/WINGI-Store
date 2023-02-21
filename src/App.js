import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import MerchantDashboard from './components/MerchantDashboard';
import ProductDetails from './components/ProductDetails';
import Layout from "./components/Layout";
import ProductListPage from "./components/ProductListPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductListPage} />
          <Route path="/dashboard" component={MerchantDashboard} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={ProductDetails} />
          <Route path="/products" component={ProductDetails} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
