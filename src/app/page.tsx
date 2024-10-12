
import './globals.css';

import Navbar from './components/navbar';
import Hero from './components/herosection';
import BodyContent from './components/body';

export default function Home() {
  return (
    <main className="" >
      <Navbar />
      <Hero />
      <BodyContent />
    </main>
  );
}
