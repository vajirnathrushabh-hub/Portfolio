import * as LucideIcons from 'lucide-react';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  // Dynamically retrieve Lucide icons by their name string
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    if (Icon) {
      return <Icon className="h-6 w-6 text-black" />;
    }
    return <LucideIcons.Sparkles className="h-6 w-6 text-black" />;
  };

  return (
    <section id="services" className="py-24 bg-brand-dark/90 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-pink/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
            WHAT I DELIVER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-1 mb-4 uppercase italic tracking-tighter leading-[0.95]">
            Comprehensive Digital Marketing & Creative Services
          </h2>
          <p className="font-sans text-base text-gray-400">
            Tailored solutions designed to attract high-quality leads, maintain clean brand consistency, and optimize digital performance on any screen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const waText = encodeURIComponent(`Hi Rushabh! I am interested in your ${service.title} service. Let's discuss details.`);
            const waLink = `https://wa.me/918767344352?text=${waText}`;

            return (
              <div
                key={service.id}
                className="glass-card border border-white/10 rounded-3xl p-8 hover:border-brand-pink/30 glow-hover transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon */}
                  <div className="h-12 w-12 rounded-2xl bg-brand-pink flex items-center justify-center shadow-lg mb-6">
                    {getIcon(service.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <hr className="border-white/5 my-6" />

                  {/* Feature bullet list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <LucideIcons.Check className="h-4 w-4 text-brand-pink shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Booking Link */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-pink hover:bg-brand-pink/10 font-sans text-xs font-bold text-white tracking-wide uppercase transition-all"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Services Footer Banner */}
        <div className="mt-16 glass-card border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
          <div>
            <h4 className="font-display font-bold text-lg sm:text-xl text-white">
              Need a Custom Campaign or Full Brand Rebrand?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-400 mt-1">
              Let's craft a bespoke, multi-channel strategy specifically tailored for your unique brand targets and budget constraints.
            </p>
          </div>
          <a
            href="https://wa.me/918767344352?text=Hi%20Rushabh!%20I%20have%20a%20custom%20marketing/web%20project%20and%20wanted%20to%20get%20your%20expert%20opinion."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-widest shadow-md shrink-0 transition-all"
          >
            Request Custom Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
