import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { toast, ToastContainer } from 'react-toastify';

function App() {
  useEffect(() => {
    toast.success('Welcome to our Food Cafe! Explore our delicious offerings and enjoy your visit!');
  }, []);
  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        draggable
      />
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;