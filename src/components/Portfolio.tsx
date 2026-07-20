import { useState } from 'react';
import { initialProjects } from '../data';
import { Project } from '../types';
import { ArrowUpRight, BarChart2, TrendingUp, X, Sparkles, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'all' | 'social' | 'web' | 'marketing'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { label: 'All Projects', value: 'all' as const },
    { label: 'Social Media', value: 'social' as const },
    { label: 'Web Design', value: 'web' as const },
    { label: 'Marketing/Ads', value: 'marketing' as const },
  ];

  const filteredProjects = activeTab === 'all'
    ? initialProjects
    : initialProjects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Glow background decoration */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-xl">
            <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-1 mb-4 uppercase italic tracking-tighter leading-[0.95]">
              A Showcase of Recent Work & Case Studies
            </h2>
            <p className="font-sans text-sm text-gray-400">
              I focus on creating digital assets that look stunning but exist for one reason: to drive traffic, increase clicks, and scale actual revenue.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 p-1 rounded-xl bg-white/5 border border-white/5 w-fit">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                  activeTab === tab.value
                    ? 'bg-brand-pink text-black font-black shadow-md shadow-brand-pink/15'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-brand-pink/30 transition-all flex flex-col justify-between"
            >
              {/* Image with hover scaling */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-brand-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                {/* Glow/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-80" />

                {/* Tags on thumbnail */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider text-white bg-brand-dark/80 backdrop-blur"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Slide overlay indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-dark/50 backdrop-blur-sm duration-300">
                  <div className="h-12 w-12 rounded-full bg-brand-pink flex items-center justify-center text-black shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-6 w-6 stroke-[3]" />
                  </div>
                </div>
              </div>

              {/* Text Card details */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-brand-pink uppercase tracking-widest font-semibold">
                    Client: {project.client}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-1 mb-3 group-hover:text-brand-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Success metrics highlights directly in grid */}
                {project.results && project.results.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/5 grid grid-cols-2 gap-4">
                    {project.results.slice(0, 2).map((res) => (
                      <div key={res.label}>
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                          {res.label}
                        </p>
                        <p className="font-display font-black text-sm text-brand-pink">
                          {res.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Project Case-Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/85 backdrop-blur-md">
            <div
              className="relative w-full max-w-2xl bg-brand-card rounded-3xl border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Image banner */}
              <div className="relative aspect-[16/9] w-full bg-brand-dark">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-dark/20 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/80 hover:bg-brand-pink text-white border border-white/10 transition-colors focus:outline-none"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Title inside banner */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="px-2.5 py-1 rounded bg-brand-pink text-[9px] font-bold uppercase text-white tracking-widest">
                    Case Study ({selectedProject.year})
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Case-Study details */}
              <div className="p-6 sm:p-8 text-left">
                {/* Meta details */}
                <div className="grid grid-cols-3 gap-4 pb-6 border-b border-white/5 mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Client</span>
                    <p className="text-xs font-semibold text-white mt-0.5">{selectedProject.client}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Services</span>
                    <p className="text-xs font-semibold text-white mt-0.5">{selectedProject.tags.join(', ')}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Year</span>
                    <p className="text-xs font-semibold text-white mt-0.5">{selectedProject.year}</p>
                  </div>
                </div>

                {/* Case Study Core Text */}
                <div className="space-y-4">
                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-brand-pink" />
                    Campaign Overview
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed">
                    Working closely with <strong className="text-white">{selectedProject.client}</strong>, we launched a complete revitalization of their marketing assets to connect with their modern target audience. We established rigorous analytics trackers to ensure every social post and landing page tweak yielded actual engagement increases.
                  </p>

                  <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider pt-4 flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-brand-pink" />
                    Our Implementation Strategy
                  </h4>
                  <ul className="space-y-2 font-sans text-xs text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-brand-pink">•</span>
                      <span>Audited active competitor profiles and built a customized design wireframe.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-pink">•</span>
                      <span>Engineered responsive, highly visual media and fast-loading web code.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-brand-pink">•</span>
                      <span>A/B tested copywriting variants to find the most cost-effective lead capture funnels.</span>
                    </li>
                  </ul>
                </div>

                {/* Big Results KPI Dashboard */}
                {selectedProject.results && (
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <BarChart2 className="h-4 w-4 text-brand-pink" />
                      OFFICIAL_METRICS_DASHBOARD
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {selectedProject.results.map((res) => (
                        <div
                          key={res.label}
                          className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-center align-middle"
                        >
                          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                            {res.label}
                          </span>
                          <span className="font-display font-bold text-lg text-brand-pink mt-1">
                            {res.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct Action */}
                <div className="mt-8 flex justify-end gap-3">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-xs font-semibold text-gray-300 transition-all"
                  >
                    Close Project
                  </button>
                  <a
                    href={`https://wa.me/918767344352?text=Hi%20Rushabh!%20I%20just%20saw%20your%20portfolio%20for%20${encodeURIComponent(selectedProject.title)}%20and%20wanted%20to%20know%2520how%2520we%2520could%2520do%2520something%2520similar%2520for%2520my%2520brand.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-wider shadow-md transition-all"
                  >
                    Discuss Similar Campaign
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
