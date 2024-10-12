
import './globals.css';

import Navbar from './components/navbar';
import Hero from './components/herosection';
import BodyContent from './components/body';
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="" >
      <Navbar />
      <Hero />
      <BodyContent />
      <Footer />
    </main>
  );
}
