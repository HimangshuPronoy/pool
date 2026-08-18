import './App.css';
import PromoBar from './components/PromoBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import FabricBanner from './components/FabricBanner';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import Gallery from './pages/Gallery';
import ServicePage from './pages/ServicePage';

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Categories />
      <HowItWorks />
      <FabricBanner />
      <Reviews />
      <Newsletter />
    </main>
  );
}

function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service/:serviceName" element={<ServicePage />} />
        {/* Fallback route to service page for other generic links */}
        <Route path="*" element={<ServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
