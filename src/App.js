import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import TrustUs from './Components/TrustUs';
import CommercialProperty from './Components/CommercialProperty';
import ResidentialProperty from './Components/ResidentailProperty';
import NewsUpdates from './Components/NewsUpdates';
import Testimonial from './Components/Testimonial';
import Testimonials from './Components/TestimonialCard';
import Footer from './Components/Footer';
import Services from './Components/Services';
import ServicesSlider from './Components/ServicesSlider';

function App() {
  return (
    <div className="App">
     <Header />
     <HeroSection />
     <TrustUs />
     <CommercialProperty />
     <ResidentialProperty />
   <ServicesSlider />
     <NewsUpdates />
     <Testimonial/>
     <Footer/>
  
    </div>
  );
}

export default App;
