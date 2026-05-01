import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 flex-grow h-full pt-8">
      
      {/* Intro Section Sidebar */}
      <motion.aside 
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/3 flex flex-col gap-6"
      >
        <div className="flex-grow bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center shadow-md">
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-1 mb-6 shadow-2xl shadow-blue-500/20">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
               <img
                  src="/images/profile.jpg"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256";
                  }}
                  alt="Cesar Castro"
                  className="w-full h-full object-cover"
               />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">Cesar Castro</h1>
          <p className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">Domain-Expert Data Scientist</p>
          <div className="flex items-center space-x-2 text-slate-400 font-mono text-xs mb-6 uppercase tracking-wider">
            <MapPin className="w-3 h-3" />
            <span>Chandler, Arizona</span>
          </div>
          <p className="text-slate-400 leading-relaxed text-sm mb-8">
             With over 20 years of technical experience and a proven track record of guiding data‑influenced strategies. Specializing in bridging the gap between physical semiconductor manufacturing and advanced analytics.
          </p>
          <div className="mt-auto flex gap-4 w-full">
             <Link to="/projects" className="flex-grow bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg flex justify-center items-center">
               View Projects
             </Link>
             <Link to="/contact" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl hover:bg-white/20 transition-all">
               <ArrowRight className="w-5 h-5 text-white" />
             </Link>
          </div>
        </div>
      </motion.aside>

      {/* Content Section */}
      <motion.main 
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-2/3 flex flex-col gap-6"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-center h-full gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Transforming Ambiguity into <br/>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic">Actionable Insights</span>
          </h2>
          
          <p className="text-lg text-slate-300 leading-relaxed">
            I bring over 8 years of experience leading cross‑functional teams to identify complex problems, deploy predictive models, and present compelling, data‑driven stories to executive stakeholders.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-mono text-3xl font-bold text-blue-400 mb-1">20+</div>
              <div className="text-xs text-slate-400 font-medium">Years Tech Experience</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-mono text-3xl font-bold text-cyan-400 mb-1">8+</div>
              <div className="text-xs text-slate-400 font-medium">Years Leadership</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-mono text-3xl font-bold text-indigo-400 mb-1">MS</div>
              <div className="text-xs text-slate-400 font-medium">Data Science (In Prog)</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
              <div className="font-mono text-3xl font-bold text-blue-400 mb-1">Semis</div>
              <div className="text-xs text-slate-400 font-medium">Industry Expert</div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> 
              Professional Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col">
                <div className="text-xs text-slate-400 font-mono mb-2">Dec 2025 - Present</div>
                <div className="font-bold text-lg text-white">Data Scientist</div>
                <div className="text-sm text-blue-400 mb-3">Intel Corporation</div>
                <p className="text-sm text-slate-300">Leading cross-functional initiatives and engineering scalable ML pipelines for semiconductor manufacturing optimization.</p>
              </div>
              
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col">
                <div className="text-xs text-slate-400 font-mono mb-2">Dec 2022 - Dec 2025</div>
                <div className="font-bold text-lg text-white">AI & Data Analytics Eng. Manager</div>
                <div className="text-sm text-blue-400 mb-3">Intel Corporation</div>
                <p className="text-sm text-slate-300">Managed complex analytics projects from data ingestion to model deployment, utilizing Gen AI and ML for yield improvement.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col">
                <div className="text-xs text-slate-400 font-mono mb-2">Aug 2020 - Dec 2022</div>
                <div className="font-bold text-lg text-white">Process/Metrology Eng. Manager</div>
                <div className="text-sm text-blue-400 mb-3">Intel Corporation</div>
                <p className="text-sm text-slate-300">Led process development, managed defect screening teams, and drove automation of key manufacturing systems.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors flex flex-col">
                <div className="text-xs text-slate-400 font-mono mb-2">Oct 2014 - Aug 2020</div>
                <div className="font-bold text-lg text-white">Packaging Development Engineer</div>
                <div className="text-sm text-blue-400 mb-3">Intel Corporation</div>
                <p className="text-sm text-slate-300">Defined thermal compression bonding processes using physical models and maintained visual dashboards for KPIs.</p>
              </div>
            </div>
          </div>

        </div>
      </motion.main>
    </div>
  );
}
