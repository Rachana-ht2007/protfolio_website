import React, { useState, useEffect } from 'react';
import {
  Check,
  Clock,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Update IST clock in Bangalore (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and message.');
      return;
    }
    setFormError('');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#E2DDD4]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-mono text-[#8A9A86] tracking-widest uppercase mb-2 block">
            05. Dispatch & Direct Line
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal tracking-tight [text-wrap:balance]">
            Let’s Build Something Intelligent
          </h2>
        </div>
        <p className="text-sm text-[#64748B] max-w-md font-normal leading-relaxed">
          Open for engineering opportunities, hackathon collaborations, full-stack development roles, and research projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Direct Links, Quick-Copy Email, and Location Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-xl font-medium text-[#0F172A] mb-3">
              Direct Contact
            </h3>
            <p className="text-xs sm:text-sm text-[#45474C] leading-relaxed mb-6">
              Whether you are hiring for full-stack engineering, collaborating on computer vision pipelines, or exploring technical partnerships, reach out directly.
            </p>

            {/* Quick-Copy Email Button */}
            <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E2DDD4] mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                University Email Address
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono text-[#0F172A] select-all truncate">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] transition-colors shrink-0 cursor-pointer shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Links with Hover Glow */}
            <div className="space-y-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] hover:border-[#1E293B] hover:shadow-sm transition-all text-xs font-mono text-[#1E293B] group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#505F76]" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-[11px] text-[#64748B] group-hover:text-[#1E293B] transition-colors">
                  @Rachana-ht2007 →
                </span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] hover:border-[#1E293B] hover:shadow-sm transition-all text-xs font-mono text-[#1E293B] group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#505F76]" />
                  <span>LinkedIn Network</span>
                </div>
                <span className="text-[11px] text-[#64748B] group-hover:text-[#1E293B] transition-colors">
                  /in/rachana-h-t →
                </span>
              </a>
            </div>
          </div>

          {/* Location & IST Live Clock Card */}
          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-5 sm:p-6 shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-[#FAF7F2] border border-[#E2DDD4] text-[#1E293B]">
                <MapPin className="w-4 h-4 text-[#8A9A86]" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#64748B] uppercase block">
                  Location & Timezone
                </span>
                <span className="text-sm font-semibold text-[#0F172A]">
                  Bangalore, India
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#1E293B] justify-end">
                <Clock className="w-3.5 h-3.5 text-[#505F76]" />
                <span className="tabular-nums">{currentTime || 'IST'}</span>
              </div>
              <span className="text-[10px] font-mono text-[#8A9A86]">
                UTC+05:30 (IST)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl bg-[#F4F1EA] border border-[#E2DDD4] p-6 sm:p-8 lg:p-10 shadow-sm">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#0F172A] mb-2">
              Send a Direct Note
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mb-6">
              Have an opening, hackathon idea, or technical question? Drop a message below.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#FAF7F2] border border-[#8A9A86]/50 text-center">
                <div className="inline-flex p-3 rounded-full bg-[#E9E6DF] text-emerald-700 mb-3">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#0F172A] mb-1">
                  Message Dispatched Successfully
                </h4>
                <p className="text-xs sm:text-sm text-[#45474C] mb-4">
                  Thank you, {formData.name}. Your note has been logged. Rachana will review it and reply to {formData.email} promptly.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-mono rounded-lg bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono">
                    {formError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maya Iyer"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#D8D2C6] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maya@example.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#D8D2C6] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Role / Research Collaboration"
                    className="w-full text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF7F2] border border-[#D8D2C6] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1.5">
                    Message Content *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share brief details regarding your project, timeline, or opportunity..."
                    className="w-full text-sm p-3.5 rounded-lg bg-[#FAF7F2] border border-[#D8D2C6] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:ring-1 focus:ring-[#1E293B]"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-medium rounded-lg bg-[#1E293B] text-[#FAF7F2] hover:bg-[#0F172A] transition-all cursor-pointer shadow-sm hover:shadow"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message Dispatch</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
