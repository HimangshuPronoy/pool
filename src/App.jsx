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

function App() {
  return (
    <>
      <PromoBar />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
        <HowItWorks />
        <FabricBanner />
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
