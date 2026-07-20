import { Award, Zap, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Audience Psychology',
      description: 'Understanding what triggers human curiosity, clicks, and conversion is the foundation of every campaign I design.',
      icon: Heart,
      color: 'text-brand-pink bg-brand-pink/10',
    },
    {
      title: 'Pixel-Perfect Build',
      description: 'I ensure every brand asset and website layout is meticulously crafted, responsive, and blazing fast on all devices.',
      icon: Zap,
      color: 'text-brand-cyan bg-brand-cyan/10',
    },
    {
      title: 'Growth-Focused Strategy',
      description: 'Every post, line of code, and ad budget is strictly aligned with key metrics — views, leads, and sales.',
      icon: Award,
      color: 'text-brand-purple bg-brand-purple/10',
    },
  ];

  const benefits = [
    'Digital Marketing expertise across multiple industries.',
    'Conversion rate optimization that lowers client acquisition costs.',
    'Stunning modern responsive web designs with clean code.',
    'Complete content calendar coordination and short-form Reels editing.',
  ];

  return (
    <section id="about" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Portrait and Overlay Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[320px] sm:max-w-[360px] lg:max-w-none">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-brand-pink/15 rounded-3xl opacity-30 blur-lg -z-10 animate-pulse" />

              {/* Main Portrait Image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 shadow-2xl relative bg-brand-card">
                <img
                  src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&w=600&h=750&q=80"
                  alt="Rushabh Vajirnath Portrait"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                {/* Tag overlay inside photo */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-pink bg-brand-pink/20 px-3 py-1 rounded-full border border-brand-pink/30">
                    SMM & WEB DEV EXPERT
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-2 leading-none">
                    Rushabh Vajirnath
                  </h3>
                  <p className="text-xs text-gray-300 mt-1">Based in India, Serving Global Brands</p>
                </div>
              </div>

              {/* Experience badge overlay */}
              <div className="absolute -top-6 -left-6 glass-card border border-white/10 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-purple/20 flex items-center justify-center font-display font-bold text-lg text-brand-purple">
                  5+
                </div>
                <div>
                  <p className="text-[10px] uppercase font-semibold text-gray-400 tracking-wider">Years of</p>
                  <p className="text-xs font-bold text-white">Digital Craft</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Values */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
              INSIDE THE WORKSPACE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-1 mb-6 uppercase italic tracking-tighter leading-[0.95]">
              A Creator Driven by Clicks, Conversions, & Visual Harmony.
            </h2>

            <p className="font-sans text-base text-gray-400 mb-6 leading-relaxed">
              I specialize in breaking through the noisy digital landscape. Whether we are launching a fresh social media presence, redesigning your company's landing pages, or configuring meta ad funnels, my goal remains identical: <strong className="text-white">uncompromised excellence and measurable business results.</strong>
            </p>

            <p className="font-sans text-base text-gray-400 mb-8 leading-relaxed">
              I operate at the intersection of creative storytelling and rigorous technical logic. I don't just "post content"—I build consistent branding ecosystems that increase follower loyalty and capture incoming organic traffic.
            </p>

            {/* Values highlights */}
            <div className="space-y-4 mb-8">
              {values.map((val) => {
                const Icon = val.icon;
                return (
                  <div
                    key={val.title}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 ${val.color}`}>
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white text-base leading-snug">
                        {val.title}
                      </h4>
                      <p className="font-sans text-xs text-gray-400 mt-1 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick benefits check */}
            <div className="pt-6 border-t border-white/5">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
                Why Work With Me?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
