"use client";

import { useState } from "react";
import { ArrowRight, X, CheckCircle } from "lucide-react";

const tools = [
  {
    title: "The Irish SME AI Risk Checklist",
    description:
      "A 10-point local guide to identifying hidden risks in your daily AI use. PDF, fillable.",
  },
  {
    title: "AI Image Safety Guide",
    description:
      "Know whether your AI-generated marketing content is safe to publish under Irish copyright and EU AI Act rules. PDF.",
  },
  {
    title: "SafeAI Team Policy Template",
    description:
      "A simple one-page Acceptable Use Policy you can give your team today. Editable .docx.",
  },
];

// TODO: replace with real URL
const MAILERLITE_ACTION_URL = "MAILERLITE_ACTION_URL";

export function FreeToolsSection() {
  const [openModal, setOpenModal] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent, index: number) => {
    e.preventDefault();
    // In production, this would submit to MailerLite
    setSubmitted(index);
    setTimeout(() => {
      setOpenModal(null);
      setSubmitted(null);
      setEmail("");
    }, 2000);
  };

  return (
    <section id="free-tools" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-teal tracking-widest uppercase mb-4">
            Free Tools
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Designed for your desk, not your lawyer
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Each download is sent to your inbox. We will email you twice more
            with a follow-up checklist and a workshop invite. Then we leave you
            alone unless you ask us not to.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-l-4 border-teal p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {tool.title}
              </h3>
              <p className="text-muted text-sm mb-4">{tool.description}</p>
              <button
                onClick={() => setOpenModal(index)}
                className="inline-flex items-center gap-2 text-teal font-medium hover:text-teal/80 transition-colors"
              >
                Get it
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {openModal !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
              <button
                onClick={() => {
                  setOpenModal(null);
                  setEmail("");
                }}
                className="absolute top-4 right-4 text-muted hover:text-charcoal"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted === openModal ? (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
                  <p className="text-charcoal font-medium">On its way!</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-charcoal mb-4">
                    {tools[openModal].title}
                  </h3>
                  <form
                    action={MAILERLITE_ACTION_URL}
                    method="POST"
                    onSubmit={(e) => handleSubmit(e, openModal)}
                  >
                    <label
                      htmlFor="tool-email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Where should we send it?
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        id="tool-email"
                        name="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.ie"
                        className="flex-1 px-4 py-3 rounded-md border border-cream bg-white text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                      />
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-base font-medium text-white hover:bg-teal/90 transition-colors"
                      >
                        Send it to me
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
