import React, { useState, useEffect } from 'react';
import { Message } from '../types';
import { Mail, MessageCircle, Check, Copy, Send, Smartphone, Inbox, Trash2, Calendar } from 'lucide-react';

interface ContactProps {
  adminMode: boolean;
  onMessageReceived: () => void;
}

export default function Contact({ adminMode, onMessageReceived }: ContactProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  // Load local messages
  useEffect(() => {
    const saved = localStorage.getItem('rushabh_contact_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (err) {
        setMessages([]);
      }
    }
  }, []);

  const saveMessages = (updated: Message[]) => {
    setMessages(updated);
    localStorage.setItem('rushabh_contact_messages', JSON.stringify(updated));
    onMessageReceived(); // Notify parent of update
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  // Handle message send
  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !body.trim()) return;

    const newMessage: Message = {
      id: `msg_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim() || 'General Inquiry',
      message: body.trim(),
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      read: false,
    };

    const saved = localStorage.getItem('rushabh_contact_messages');
    let current: Message[] = [];
    if (saved) {
      try {
        current = JSON.parse(saved);
      } catch (e) {}
    }

    const updated = [newMessage, ...current];
    saveMessages(updated);

    // Success State animation trigger
    setFormSuccess(true);
    setName('');
    setEmail('');
    setSubject('');
    setBody('');

    setTimeout(() => {
      setFormSuccess(false);
    }, 4000);
  };

  // Administrative: Mark as Read
  const handleToggleRead = (id: string) => {
    const updated = messages.map((m) => (m.id === id ? { ...m, read: !m.read } : m));
    saveMessages(updated);
  };

  // Administrative: Delete inquiry
  const handleDeleteMessage = (id: string) => {
    const updated = messages.filter((m) => m.id !== id);
    saveMessages(updated);
  };

  const myEmail = 'aarushgrup17@gmail.com';
  const myPhone = '+91 8767344352';

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@dad_of_aarav_aarush_',
      url: 'https://www.instagram.com/dad_of_aarav_aarush_/',
      icon: 'Instagram',
      color: 'bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-black',
    },
    {
      name: 'LinkedIn',
      handle: 'Rushabh Vajirnath',
      url: 'https://www.linkedin.com/in/rushabh-vajirnath-918582205',
      icon: 'Linkedin',
      color: 'bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Twitter / X',
      handle: '@RushabhV1718',
      url: 'https://x.com/RushabhV1718',
      icon: 'Twitter',
      color: 'bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-black',
    },
    {
      name: 'Facebook',
      handle: 'Rushabh Vajirnath',
      url: 'https://www.facebook.com/vajirnath007',
      icon: 'Facebook',
      color: 'bg-blue-800/10 text-blue-500 hover:bg-blue-800 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-brand-dark/95 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-pink/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-brand-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-brand-pink">
            CONNECT WITH ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mt-1 mb-3 uppercase italic tracking-tighter leading-[0.95]">
            Let's Scale Your Brand Today
          </h2>
          <p className="font-sans text-sm text-gray-400">
            Choose your preferred channel below. Send a direct message or connect instantly via WhatsApp or email for rapid responses!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info panels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Email Contact Card */}
            <div className="glass-card border border-white/10 rounded-2xl p-6 hover:border-brand-pink/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center shrink-0">
                  <Mail className="h-5.5 w-5.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-gray-300 text-sm uppercase tracking-wider">
                    Direct Email
                  </h4>
                  <p className="font-sans font-semibold text-white text-base truncate mt-1">
                    {myEmail}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Average reply time: Under 4 Hours</p>

                  <div className="flex items-center gap-2.5 mt-4">
                    <a
                      href={`mailto:${myEmail}`}
                      className="px-4 py-2 rounded-lg bg-brand-pink/15 hover:bg-brand-pink text-brand-pink hover:text-black font-sans text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Send Email
                    </a>
                    <button
                      onClick={() => copyToClipboard(myEmail, 'email')}
                      className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none flex items-center gap-1.5 text-xs font-semibold"
                    >
                      {copiedEmail ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="glass-card border border-white/10 rounded-2xl p-6 hover:border-green-500/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                  <Smartphone className="h-5.5 w-5.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-gray-300 text-sm uppercase tracking-wider">
                    WhatsApp Chat
                  </h4>
                  <p className="font-sans font-semibold text-white text-base truncate mt-1">
                    {myPhone}
                  </p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5">Instant communication line</p>

                  <div className="flex items-center gap-2.5 mt-4">
                    <a
                      href={`https://wa.me/918767344352?text=Hi%20Rushabh!%20I%20reached%20out%20via%20your%2520portfolio%2520and%2520wanted%252520to%252520discuss%25252520a%25252520new%25252520project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-500/15 hover:bg-green-500 text-green-400 hover:text-white font-sans text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      Start Chat
                    </a>
                    <button
                      onClick={() => copyToClipboard('918767344352', 'phone')}
                      className="p-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none flex items-center gap-1.5 text-xs font-semibold"
                    >
                      {copiedPhone ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Creative Grid of Social Badges */}
            <div className="pt-4 text-left">
              <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">
                SOCIAL BRAND HANDLES
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl border border-white/5 text-left transition-all ${social.color}`}
                  >
                    <p className="text-[10px] font-mono opacity-60 uppercase">{social.name}</p>
                    <p className="text-xs font-semibold truncate mt-1 leading-none">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form Block */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-white/10 rounded-3xl p-6 sm:p-8 text-left relative overflow-hidden">
              {/* Submission visual success page overlay */}
              {formSuccess && (
                <div className="absolute inset-0 bg-brand-card/95 backdrop-blur flex flex-col items-center justify-center p-8 text-center z-10 animate-fade-in">
                  <div className="h-16 w-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4 border border-green-500/30">
                    <Check className="h-8 w-8 animate-bounce" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">Message Transmitted!</h3>
                  <p className="font-sans text-xs text-gray-400 mt-2 max-w-xs">
                    Your inquiry has been stored. If Sandbox Admin mode is active, toggle the Sandbox Demo in the header to view it instantly in the live ledger!
                  </p>
                </div>
              )}

              <span className="text-[10px] font-mono text-brand-pink uppercase tracking-widest font-semibold block mb-2">
                INQUIRY_DEPT
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmitMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. business@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Subject / Project Scope
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. SMM Campaign Pitch / React Web Design"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-1.5">
                    Describe Your Brand & Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide a quick outline of what services you require and your growth targets..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full bg-white/5 border border-white/5 focus:border-brand-pink/30 rounded-xl px-4 py-3 font-sans text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-pink text-black hover:bg-white hover:text-black font-sans text-xs font-black uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Admin Message Ledger - Only visible if sandbox is ON */}
        {adminMode && (
          <div className="mt-16 glass-card border border-brand-pink/30 rounded-3xl p-6 sm:p-8 text-left animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-pink/5 blur-2xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
              <Inbox className="h-5.5 w-5.5 text-brand-pink" />
              <h3 className="font-display font-bold text-lg text-white">
                Rushabh's Lead Inquiry Ledger <span className="text-xs font-mono font-medium text-brand-pink bg-brand-pink/10 px-2 py-0.5 rounded ml-2">DEMO_INBOX</span>
              </h3>
            </div>

            {messages.length > 0 ? (
              <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded-xl border transition-all ${
                      msg.read
                        ? 'bg-white/2 border-white/5 text-gray-400'
                        : 'bg-brand-pink/5 border-brand-pink/20 text-gray-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 text-xs">
                      <div>
                        <strong className="text-white text-sm">{msg.name}</strong>{' '}
                        <span className="text-gray-500 font-mono">({msg.email})</span>
                      </div>
                      <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {msg.date}
                        </span>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => handleToggleRead(msg.id)}
                            className="px-2 py-0.5 rounded bg-white/5 hover:bg-brand-cyan hover:text-white transition-colors"
                          >
                            {msg.read ? 'Mark Unread' : 'Mark Read'}
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="p-1 rounded bg-white/5 hover:bg-red-500 text-gray-400 hover:text-white transition-colors"
                            title="Delete Inquiry"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-white mb-1.5">Subject: {msg.subject}</p>
                    <p className="text-xs leading-relaxed font-sans">{msg.message}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 rounded-2xl bg-white/3 border border-white/5">
                <p className="text-gray-400 text-sm">No client messages received yet.</p>
                <p className="text-xs text-gray-500 mt-1">Submit a message through the contact form above to watch it arrive in real-time!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
