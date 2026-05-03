/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  MessageSquare,
  AlertCircle,
  Menu,
  X,
  Linkedin,
  Mail,
  GraduationCap,
  Briefcase,
  User,
  Coffee,
  Instagram,
  School,
  Gem,
  Files,
  FileText,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface QuizResult {
  riskLevel: 'Low' | 'Medium' | 'High';
  message: string;
  recommendation: string;
}

// --- Data ---
const CREDENTIALS = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    title: "15+ Years AI & Knowledge Systems",
    description: "Built foundational expertise at Microsoft and VMware in enterprise-scale AI implementation.",
    tags: ["Microsoft Alum", "VMware Alum"]
  },
  {
    icon: <User className="w-5 h-5" />,
    title: "EU Legislative Expert",
    description: "5 years working in the European Parliament as an MEP parliamentary assistant.",
    tags: ["EU Parliament Expert", "Insider Knowledge"]
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "AI Business Scholar",
    description: "Specialized studying in AI for Business & Digital Transformation - Linköping University.",
    tags: ["Linköping Uni", "Academic Precision"]
  }
];

const BLOG_POSTS = [
  {
    date: "Intelligence Briefing • April 2026",
    title: "The EU AI Act: What Irish Sole Traders Need to Know",
    excerpt: "Demystifying the new regulations and how to stay compliant without a legal team or Big4 fees."
  },
  {
    date: "Staff Training • Feb 2026",
    title: "Safe ChatGPT Usage at Work",
    excerpt: "How to leverage generative AI without compromising your client's sensitive data or sounding robotic."
  }
];

const SCENARIOS = [
  { icon: <MessageSquare />, text: "“Write me a customer email” in ChatGPT" },
  { icon: <User />, text: "Paste client info into an AI tool to “improve it”" },
  { icon: <Instagram />, text: "Generate Instagram captions or product descriptions" },
  { icon: <Gem />, text: "Create images or logos using AI" },
  { icon: <Files />, text: "Ask AI to summarise documents or messages" }
];

const RISKS = [
  { text: "You might be sharing customer data without knowing it", icon: <AlertCircle className="w-5 h-5 text-tertiary" /> },
  { text: "AI-generated content can accidentally copy existing work", icon: <AlertCircle className="w-5 h-5 text-tertiary" /> },
  { text: "Some tools store or reuse what you type", icon: <AlertCircle className="w-5 h-5 text-tertiary" /> },
  { text: "You’re still responsible for what AI produces", icon: <AlertCircle className="w-5 h-5 text-tertiary" /> }
];

const TRAINING_LOOKS_LIKE = [
  "Knowing what not to paste into AI tools",
  "Understanding when AI-generated content could cause issues",
  "Using AI for marketing without risking your brand",
  "Having simple guidelines you can follow daily"
];

const FREEBIES = [
  {
    title: "The Irish SME AI Risk Checklist",
    description: "A 10-point local guide to identifying hidden risks in your daily usage.",
    format: "PDF Download",
    icon: <FileText className="w-6 h-6 text-primary" />
  },
  {
    title: "AI Image Safety Guide",
    description: "Know if your generated marketing content is legal under Irish copyright law.",
    format: "Checklist",
    icon: <Files className="w-6 h-6 text-primary" />
  },
  {
    title: "Safe AI Team Policy Template",
    description: "A simple 1-page policy you can give to staff today.",
    format: "Editable doc",
    icon: <Files className="w-6 h-6 text-primary" />
  }
];

const EBOOKS = [
  {
    title: "The EU AI Act (Plain English Edition)",
    price: "€49",
    description: "15 pages of pure translation. No jargon, just what you need to do by August 2026.",
    badge: "Bestseller",
    icon: <FileText className="w-8 h-8" />
  },
  {
    title: "AI Strategy for Sole Traders",
    price: "€29",
    description: "How to use ChatGPT and Midjourney to run your business like a team of ten.",
    badge: "New",
    icon: <Gem className="w-8 h-8" />
  },
  {
    title: "Educational AI Governance",
    price: "€79",
    description: "A comprehensive framework for schools and colleges navigating AIAct Article 4.",
    badge: "Essential",
    icon: <School className="w-8 h-8" />
  }
];

const PRODUCTS = [
  {
    title: "AI Literacy Starter Kit",
    price: "€199",
    description: "The complete system for establishing safe AI habits in small teams including 3 workshops.",
    type: "Full Training"
  },
  {
    title: "Custom Compliance Audit",
    price: "Custom",
    description: "A 1-on-1 review of your current systems with a certified roadmap to legal safety.",
    type: "Consultation"
  }
];

const EditorialCard = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-10 rounded-2xl ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const quizQuestions = [
    "Are you or your staff using AI to generate images (Midjourney, ChatGPT, etc)?",
    "Do you paste sensitive or client data into AI tools to help write reports?",
    "Do you want to use AI to save time but worry it makes your brand sound robotic?",
    "Are you worried about the August 2026 EU AI Act deadline for your staff?"
  ];

  const handleQuizAnswer = (ans: boolean) => {
    const newAnswers = [...quizAnswers, ans];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const getQuizResult = (): QuizResult => {
    const yesCount = quizAnswers.filter(a => a).length;
    if (yesCount >= 3) return {
      riskLevel: 'High',
      message: "You're a power user, but your risk exposure is significant.",
      recommendation: "You likely need Article 4 compliance training to protect your business legally."
    };
    if (yesCount >= 1) return {
      riskLevel: 'Medium',
      message: "You're starting to use AI effectively, but there are gaps.",
      recommendation: "Our Safe AI Team Policy template would be a great first step for you."
    };
    return {
      riskLevel: 'Low',
      message: "You're currently in a safe spot, but the rules are changing.",
      recommendation: "Stay ahead of the curve with our free AI literacy checklist."
    };
  };

  return (
    <div className="min-h-screen text-on-surface selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Safe AI Ireland Logo" className="h-10 w-auto" />
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Problem', 'Quiz', 'Freebies', 'Ebooks', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-sm font-medium text-slate-600 hover:text-primary transition-all px-3 py-2 rounded-lg hover:bg-primary/5 active:scale-95"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary">
              Contact Us
            </button>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center text-center pt-56 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white px-4 py-2 rounded-full mb-8 shadow-sm"
        >
          <img src="/logo.png" alt="Icon" className="w-4 h-4 object-contain" />
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">AI Training and Compliance</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[44px] md:text-[64px] font-bold leading-[1.1] text-slate-900 max-w-5xl mb-8 tracking-tight"
        >
          Safe AI for Small Businesses in Ireland. <br />
          <span className="text-primary">AI training: simple, practical, compliant.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-on-surface-variant max-w-3xl mb-12 leading-relaxed"
        >
          I help Irish SMEs become EU AI Act compliant through practical, documented staff training 
          that covers real risks—data leaks, GDPR exposure, and shadow AI—not just theory.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#quiz" className="btn-primary flex items-center gap-2 px-8 py-4">
            Take the 2-Minute Check <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#problem" className="btn-outline px-8 py-4">
            Relatable Scenarios
          </a>
        </motion.div>
      </section>

      {/* The Hook / Sub-Hero Section */}
      <section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold text-slate-900 leading-tight">
              “I Only Use ChatGPT… <br />
              <span className="text-primary">That’s Safe, Right?”</span>
            </h2>
            <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-2xl mx-auto">
              That’s what most small business owners think. 
              But even simple AI use can create hidden risks especially under the EU AI Act.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Relatable Scenarios Section */}
      <section id="problem" className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-slate-900">
            If you’ve ever done any of this… <br />
            <span className="text-primary font-medium">you’re already using AI.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SCENARIOS.map((scen, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-center gap-6"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary shrink-0">
                {scen.icon}
              </div>
              <p className="text-lg text-slate-800 font-medium">{scen.text}</p>
            </motion.div>
          ))}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-center bg-primary/5 border-primary/20 hover:scale-105 transition-transform cursor-default">
            <div className="flex items-center gap-3 mb-2">
              <p className="text-lg font-bold text-slate-900">This feels normal.</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-lg font-bold text-primary italic">But it’s not always risk-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Oh Moment Section */}
      <section className="py-32 px-6 bg-slate-900 text-white rounded-[3rem] mx-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">The “Oh…” Moment</h2>
          <p className="text-xl text-slate-400 mb-16">What most people don’t realise:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
            {RISKS.map((risk, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 items-start bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mt-1">{risk.icon}</div>
                <p className="text-lg font-medium leading-relaxed">{risk.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 py-8 border-t border-white/10">
            <p className="text-xl font-bold text-primary">And yes—even small, one-person businesses are included.</p>
          </div>
        </div>
      </section>

      {/* Authority & Bridge Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              “You don’t need to stop using AI. <br />
              <span className="text-primary">You just need to use it properly.”</span>
            </h2>
          </div>

          <div className="h-1 bg-slate-100 w-24 mx-auto" />

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">That’s where basic AI awareness comes in.</h3>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              Under the EU AI Act, businesses are expected to have a basic understanding of how they use AI and the risks involved.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center italic text-slate-500 font-medium">
              <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Not formal training.</span>
              <span className="flex items-center gap-2 justify-center"><CheckCircle2 className="w-5 h-5 text-primary" /> Not complicated rules.</span>
            </div>
            <div className="flex items-center justify-center gap-3 pt-4">
              <p className="text-xl font-bold text-slate-900">Just knowing what’s safe and what’s not.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Look Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-slate-900">What this actually looks like:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_LOOKS_LIKE.map((item, idx) => (
            <EditorialCard key={idx} className="!p-8 flex flex-col justify-center text-center hover:bg-primary/5 transition-colors group">
              <p className="text-lg font-bold text-slate-800 leading-tight group-hover:text-primary transition-colors">{item}</p>
            </EditorialCard>
          ))}
        </div>
      </section>

      {/* Quiz Section (Primary CTA Target) */}
      <section id="quiz" className="py-40 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-on-surface">Not sure if you're using AI safely?</h2>
            <p className="text-on-surface-variant mb-12 max-w-xl mx-auto font-medium">
              Take the 2-minute check for small business owners and managers.
            </p>

            <motion.div 
              layout
              className="glass-card p-10 rounded-[2.5rem] max-w-md mx-auto"
            >
              <AnimatePresence mode="wait">
                {!quizFinished ? (
                  <motion.div 
                    key={quizStep}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex flex-col gap-10"
                  >
                    <div className="text-[10px] font-bold uppercase text-primary tracking-[0.2em]">Step {quizStep + 1} of 4</div>
                    <h3 className="text-xl font-bold leading-tight text-slate-900">{quizQuestions[quizStep]}</h3>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => handleQuizAnswer(true)}
                        className="btn-primary w-full py-4"
                      >
                        Yes, We Do
                      </button>
                      <button 
                        onClick={() => handleQuizAnswer(false)}
                        className="btn-outline w-full py-4 text-slate-800"
                      >
                        No / Not Sure
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col gap-8"
                  >
                    <div className="mb-4">
                      {getQuizResult().riskLevel === 'High' ? (
                        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto">
                          <AlertCircle className="w-10 h-10" />
                        </div>
                      ) : getQuizResult().riskLevel === 'Medium' ? (
                        <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
                          <AlertCircle className="w-10 h-10" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                          <ShieldCheck className="w-10 h-10" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{getQuizResult().riskLevel} Risk Profile</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{getQuizResult().message}</p>
                    
                    <div className="bg-primary/5 p-6 rounded-2xl text-left border border-primary/10">
                      <p className="font-bold text-[10px] text-primary mb-2 uppercase tracking-widest">Recommendation:</p>
                      <p className="text-sm font-medium text-slate-800">{getQuizResult().recommendation}</p>
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="btn-primary w-full py-4 text-base">
                        Book Your Free Check
                      </button>
                      <button 
                        onClick={() => { setQuizFinished(false); setQuizStep(0); setQuizAnswers([]); }}
                        className="text-on-surface-variant hover:text-primary transition-colors underline text-[11px] font-semibold"
                      >
                        Restart Check
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
      </section>

      {/* Freebies Section */}
      <section id="freebies" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight">Free Safety Tools.</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              Downloads designed for your desk, not your lawyer. Pro bono tools for local businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FREEBIES.map((free, idx) => (
            <EditorialCard key={idx} className="flex flex-col group">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {free.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{free.title}</h3>
              <p className="text-on-surface-variant flex-grow mb-10 leading-relaxed font-medium">
                {free.description}
              </p>
              <div className="flex items-center justify-between w-full pt-8 border-t border-outline/30">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">{free.format}</span>
                <button className="text-primary font-black flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                  Download <Download className="w-4 h-4" />
                </button>
              </div>
            </EditorialCard>
          ))}
        </div>
      </section>

      {/* Ebooks Section */}
      <section id="ebooks" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Professional Guides.</h2>
          <p className="text-lg text-on-surface-variant max-w-xl mx-auto">
            Deep dives for businesses ready to establish a permanent, safe AI roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EBOOKS.map((ebook, idx) => (
            <div key={idx} className="bg-secondary/40 p-12 rounded-[2rem] flex flex-col group">
              <div className="flex justify-between items-start mb-12">
                <div className="text-on-surface opacity-80">
                  {ebook.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-on-surface text-white px-2.5 py-1 rounded-md">
                  {ebook.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                {ebook.title}
              </h3>
              
              <p className="text-on-surface-variant mb-12 flex-grow leading-relaxed text-sm">
                {ebook.description}
              </p>
              
              <div className="flex items-center justify-between w-full pt-8 border-t border-black/5">
                <div className="text-2xl font-bold">{ebook.price}</div>
                <button className="btn-primary">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Training / Products Section */}
      <section id="training" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Establish Resilience.</h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              When you're ready to go beyond the basics and build a truly resilient organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PRODUCTS.map((prod, idx) => (
              <EditorialCard key={idx} className="flex flex-col md:flex-row gap-10 items-center">
                <div className="h-32 w-32 bg-primary/5 rounded-2xl flex items-center justify-center shrink-0 border border-primary/10">
                   <BookOpen className="w-10 h-10 text-primary opacity-40" strokeWidth={1.5} />
                </div>
                <div className="flex-grow">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-3">{prod.type}</div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900">{prod.title}</h3>
                  <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">{prod.description}</p>
                  <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                    <span className="text-3xl font-bold text-slate-900">{prod.price}</span>
                    <button className="btn-primary flex items-center gap-2 text-sm">
                       Enrol Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </EditorialCard>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement Section */}
      <section className="py-24 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-bold text-slate-900 leading-relaxed italic">
            "I help Irish SMEs become EU AI Act compliant through practical, documented staff training 
            that covers real risks - data leaks, GDPR exposure, shadow AI - not just theory."
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-16 border-t border-white/30 bg-white/70 backdrop-blur-[10px] relative z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Safe AI Ireland Logo" className="h-10 w-auto" />
            </div>
            <div className="flex flex-wrap md:justify-end gap-6">
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Cookie Settings</a>
              <a className="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Global Standards</a>
            </div>
          </div>
          <div className="text-sm text-slate-400 text-center border-t border-slate-100 pt-8">
            © 2026 Safe AI Ireland. Engineering Trust in Intelligence. Based in Cork.
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex flex-col p-8 pt-24"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-8 p-2"
            >
              <img src="/logo.png" alt="Logo" className="h-8 w-auto text-slate-600" />
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-8 p-2 text-slate-600"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-6 text-3xl font-bold tracking-tight text-slate-900">
               {['Problem', 'Quiz', 'Freebies', 'Ebooks', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <button className="mt-auto btn-primary w-full py-4 text-lg">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
