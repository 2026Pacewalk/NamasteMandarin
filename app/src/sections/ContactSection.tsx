import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { api } from '../lib/api';

gsap.registerPlugin(ScrollTrigger);

type SubmitState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    message: '',
  });
  const [status, setStatus] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 40%', scrub: 0.5 },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      await api.leads.submit(formData);
      setStatus('sent');
      setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="section-flowing bg-red-rich star-bg py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6" ref={formRef}>
        <div className="mb-12">
          <SectionHeading kicker="Get In Touch" title="Contact Us" tone="dark" />
        </div>

        <div className="bg-white rounded-3xl p-6 lg:p-10 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
          {status === 'sent' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="text-green-600" size={32} />
              </div>
              <h3 className="font-display text-2xl text-nm-black font-semibold mb-2">Thank you!</h3>
              <p className="text-nm-black/70 text-sm max-w-md mx-auto">
                Your enquiry has been received. Our team will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-nm-red text-sm font-medium hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-nm-black/70 text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-nm-black text-sm focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/20 transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-nm-black/70 text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-nm-black text-sm focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/20 transition-all"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-nm-black/70 text-sm mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-nm-black text-sm focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/20 transition-all"
                  placeholder="+91..."
                />
              </div>
              <div>
                <label className="block text-nm-black/70 text-sm mb-2">Goal</label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-nm-black text-sm focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/20 transition-all"
                  required
                >
                  <option value="">Select your goal</option>
                  <option value="kids">Kids / Young Learners</option>
                  <option value="professional">Working Professional</option>
                  <option value="corporate">Corporate Training</option>
                  <option value="hobby">Learning as a Hobby</option>
                  <option value="hsk">HSK Exam Preparation</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-nm-black/70 text-sm mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-nm-black text-sm focus:outline-none focus:border-nm-red focus:ring-2 focus:ring-nm-red/20 transition-all resize-none"
                placeholder="Tell us about your learning goals..."
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">{errorMsg}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-red flex-1 justify-center disabled:opacity-60"
              >
                {status === 'sending' ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              <a
                href="https://wa.me/+919880687766"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex-1 justify-center"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
