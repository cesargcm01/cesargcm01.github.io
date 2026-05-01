import { motion } from 'motion/react';
import { BrainCircuit, Image as LucideImage, Activity, Database, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const categories = ['All', 'Machine Learning', 'Computer Vision', 'Time Series', 'Data Engineering'];

const projects = [
  {
    title: 'Predictive Equipment Maintenance',
    type: 'Classification Model',
    period: '2024 Project',
    category: 'Machine Learning',
    icon: <BrainCircuit className="w-6 h-6" />,
    description: 'An end-to-end framework to predict manufacturing tool failures, intended to reduce unplanned downtime and optimize maintenance schedules.',
    story: {
      problem: 'Unplanned equipment downtime was causing significant yield loss and production delays. Traditional maintenance strategies were purely scheduled-based, failing to capture premature degradation.',
      approach: 'Developed an XGBoost classification model trained on high-dimensional sensor telemetry and historical maintenance logs. Deployed an API to process live streams and identify early failure signatures.',
      impact: 'Successfully intercepted 24% of unexpected tool failures in pilot testing, increasing overall equipment effectiveness (OEE) and saving manufacturing capacity.'
    },
    skills: ['Python', 'Scikit-learn', 'XGBoost', 'FastAPI'],
    chart: {
      type: 'bar',
      data: [
        { month: 'Jan', failures: 15, intercepted: 0 },
        { month: 'Feb', failures: 12, intercepted: 0 },
        { month: 'Mar', failures: 14, intercepted: 3 },
        { month: 'Apr', failures: 11, intercepted: 5 },
        { month: 'May', failures: 9, intercepted: 6 },
        { month: 'Jun', failures: 5, intercepted: 8 },
      ]
    }
  },
  {
    title: 'Wafer Defect Categorization',
    type: 'Deep Learning',
    period: '2023 - 2024',
    category: 'Computer Vision',
    icon: <LucideImage className="w-6 h-6" />,
    description: 'A CNN-based image classification model designed to automatically categorize scanning electron microscope (SEM) defect images into critical failure modes.',
    story: {
      problem: 'Manual classification of SEM defect images was time-consuming and subjective, slowing down the root-cause analysis loop for process engineers.',
      approach: 'Created a custom ResNet-based CNN architecture trained on heavily imbalanced, real-world defect datasets. Leveraged data augmentation and implemented Grad-CAM for model interpretability.',
      impact: 'Achieved 94% classification accuracy across 12 defect classes, reducing manual review time by 80% and accelerating the yield learning cycle.'
    },
    skills: ['PyTorch', 'OpenCV', 'Deep Learning', 'Computer Vision'],
    chart: {
      type: 'area',
      data: [
        { week: 'W1', accuracy: 65, humanAccuracy: 85 },
        { week: 'W2', accuracy: 72, humanAccuracy: 84 },
        { week: 'W3', accuracy: 81, humanAccuracy: 86 },
        { week: 'W4', accuracy: 88, humanAccuracy: 85 },
        { week: 'W5', accuracy: 92, humanAccuracy: 85 },
        { week: 'W6', accuracy: 94, humanAccuracy: 86 },
      ]
    }
  },
  {
    title: 'Yield Forecasting Engine',
    type: 'Sequential Modeling',
    period: '2023 Project',
    category: 'Time Series',
    icon: <Activity className="w-6 h-6" />,
    description: 'Time series analysis to forecast end-of-line yield metrics based on upstream process parameters and lot-level historical trends.',
    story: {
      problem: 'Process drift over long production runs made it difficult to predict final line yields accurately, leading to inventory and supply chain inefficiencies.',
      approach: 'Evaluated ARIMA, Prophet, and LSTM architectures to handle complex multivariate drift. Ultimately deployed an LSTM model with an interactive Streamlit dashboard for stakeholder review.',
      impact: 'Improved 4-week yield forecast accuracy by 15%, allowing for better wafer start planning and tighter control limits on upstream processes.'
    },
    skills: ['Time Series', 'LSTM', 'Prophet', 'Streamlit'],
    chart: {
      type: 'line',
      data: [
        { batch: 'B1', actualYield: 85.2, predicted: 84.9 },
        { batch: 'B2', actualYield: 86.5, predicted: 86.1 },
        { batch: 'B3', actualYield: 83.4, predicted: 84.0 },
        { batch: 'B4', actualYield: 88.1, predicted: 87.5 },
        { batch: 'B5', actualYield: 89.5, predicted: 89.2 },
        { batch: 'B6', actualYield: 91.2, predicted: 90.8 },
      ]
    }
  },
  {
    title: 'Metrology Data Lakehouse',
    type: 'ETL Pipeline',
    period: 'Ongoing',
    category: 'Data Engineering',
    icon: <Database className="w-6 h-6" />,
    description: 'A scalable data architecture designed to ingest, clean, and standardize terabytes of heterogeneous semiconductor metrology files.',
    story: {
      problem: 'Data scientists spent 60% of their time manually querying fragmented databases and cleaning raw tool logs before any analysis could begin.',
      approach: 'Architected automated scalable ETL pipelines moving raw data to a centralized data lakehouse. Implemented columnar storage formats and automated quality alerting.',
      impact: 'Reduced data preparation time from days to minutes. Enabled lightning-fast anomaly queries across years of historical metrology data.'
    },
    skills: ['SQL', 'Cloud Storage', 'Data Pipelines', 'ETL'],
    chart: {
      type: 'bar-stacked',
      data: [
        { quarter: 'Q1', analysisTime: 40, dataPrepTime: 60 },
        { quarter: 'Q2', analysisTime: 45, dataPrepTime: 40 },
        { quarter: 'Q3', analysisTime: 70, dataPrepTime: 20 },
        { quarter: 'Q4', analysisTime: 85, dataPrepTime: 10 },
      ]
    }
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const renderChart = (chartConfig: any) => {
    switch (chartConfig.type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartConfig.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="failures" name="Unplanned Failures" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="intercepted" name="Intercepted by AI" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={chartConfig.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="week" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[50, 100]} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Area type="monotone" dataKey="accuracy" name="AI Model Accuracy %" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorAccuracy)" />
              <Area type="monotone" dataKey="humanAccuracy" name="Baseline (Human)" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartConfig.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="batch" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={['dataMin - 2', 'dataMax + 2']} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line type="monotone" dataKey="predicted" name="Predicted Yield %" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="actualYield" name="Actual Yield %" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'bar-stacked':
        return (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartConfig.data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="quarter" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip cursor={{fill: '#1e293b'}} contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc' }} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="dataPrepTime" stackId="a" name="Data Prep Time (%)" fill="#64748b" radius={[0, 0, 4, 4]} />
              <Bar dataKey="analysisTime" stackId="a" name="Value-Add Analysis (%)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">Project Portfolio</h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-12">
          A deep dive into my recent initiatives, predictive models, and data pipelines showcasing my approach to solving complex engineering problems.
        </p>

        {/* Category Filters */}
        <div className="flex space-x-2 mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                activeCategory === category
                  ? "bg-blue-600/20 text-blue-400 border-blue-500/30 border shadow-md"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.title + project.period}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 overflow-hidden"
            >
              {/* Project Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-8 border-b border-white/10 gap-4">
                <div className="flex items-start md:items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                    {project.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-400 font-medium">{project.type}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      <span className="text-slate-400 text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="self-start md:self-center">
                  <span className="inline-block px-4 py-1.5 bg-slate-900/50 border border-white/10 text-slate-300 text-xs font-mono font-medium rounded-full uppercase tracking-wider backdrop-blur-sm">
                    {project.period}
                  </span>
                </div>
              </div>

              {/* Project Body: Story + Visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
                {/* Left Column: The Story */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <p className="text-lg text-slate-200 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  
                  <div className="space-y-6 mt-2">
                    <div>
                      <h4 className="flex items-center text-sm font-bold text-slate-100 uppercase tracking-widest mb-2">
                        <ChevronRight className="w-4 h-4 text-blue-500 mr-1" />
                        The Problem
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.story.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center text-sm font-bold text-slate-100 uppercase tracking-widest mb-2">
                        <ChevronRight className="w-4 h-4 text-cyan-400 mr-1" />
                        Our Approach
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.story.approach}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center text-sm font-bold text-slate-100 uppercase tracking-widest mb-2">
                        <ChevronRight className="w-4 h-4 text-green-400 mr-1" />
                        The Impact
                      </h4>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {project.story.impact}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-6 mt-auto">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-slate-900/80 border border-white/5 text-slate-300 text-xs font-medium rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Interactive Visualization */}
                <div className="lg:col-span-5 flex flex-col">
                  <h4 className="text-sm font-bold text-slate-100 uppercase tracking-widest mb-6">
                    Project Outcomes
                  </h4>
                  <div className="flex-grow bg-slate-900/50 rounded-2xl border border-white/5 p-4 flex flex-col justify-center min-h-[300px]">
                    {renderChart(project.chart)}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
