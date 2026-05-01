import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden font-sans">
        {/* Mesh Gradient Background Decoration */}
        <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
        
        <div className="z-10 relative flex flex-col flex-grow w-full">
          <Navbar />
          <main className="flex-grow pt-32 pb-16 px-4 md:px-8 max-w-[1280px] mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}
