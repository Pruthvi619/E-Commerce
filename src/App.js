import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NurserySection from "./Components/NurserySection";
import PlantTabs from "./Components/PlantTabs";
import ProductListSection from "./Components/ProductListSection";
import Footer from "./Components/Footer";
import ThankYouPage from "./Components/ThankYouPage";

function Layout() {
  return (
    <>
      <Header />
      <PlantTabs />
      <NurserySection />
      <ProductListSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
