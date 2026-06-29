import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', goal: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="section-flowing bg-nm-red star-bg py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6" ref={formRef}>
        <h2 className="text-center font-display text-[clamp(32px,3.5vw,52px)] text-white font-semibold mb-10">
          Contact Us
        </h2>

        <div className="bg-white rounded-2xl p-6 lg:p-10">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <button type="submit" className="btn-red flex-1 justify-center">
                <Send size={16} />
                Send Message
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
        </div>
      </div>
    </section>
  );
}
