"use client";

import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

const guides = [
  {
    badge: "Bestseller",
    title: "The EU AI Act for Irish Small Organisations",
    description: "Plain-English field guide, 17 pages, edition 1.",
    price: "Free with email signup",
    isFree: true,
  },
  {
    badge: "New",
    title: "AI for Sole Traders",
    description:
      "How to use ChatGPT, Claude, and Canva Magic to run your business like a team of ten, without the legal headaches.",
    price: "€19",
    isFree: false,
  },
  {
    badge: "For schools",
    title: "Educational AI Governance",
    description:
      "Article 4 framework for primary, post-primary, and further education. Includes a staff policy template and a parents-information one-pager.",
    price: "€39",
    isFree: false,
  },
];

// TODO: replace with real URLs
const GUMROAD_URL = "https://gumroad.com/safeai";
const MAILERLITE_ACTION_URL = "MAILERLITE_ACTION_URL";

export function GuidesSection() {
  const [freeGuideModal, setFreeGuideModal] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFreeGuideModal(false);
      setSubmitted(false);
      setEmail("");
    }, 2000);
  };

  return (
    <section id="guides" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-teal tracking-widest uppercase mb-4">
            Companion Guides
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            When you want to go deeper
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            These are the working documents we hand to clients during workshops.
            You can buy them on their own.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-cream p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-teal text-white text-xs font-medium mb-4">
                {guide.badge}
              </span>
              <h3 className="text-lg font-bold text-charcoal mb-2">
                {guide.title}
              </h3>
              <p className="text-muted text-sm mb-4">{guide.description}</p>
              <p className="text-charcoal font-medium mb-4">{guide.price}</p>
              {guide.isFree ? (
                <button
                  onClick={() => setFreeGuideModal(true)}
                  className="inline-flex items-center justify-center rounded-md border border-teal px-4 py-2 text-sm font-medium text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  Get it free
                </button>
              ) : (
                <a
                  href={GUMROAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-teal px-4 py-2 text-sm font-medium text-teal hover:bg-teal hover:text-white transition-colors"
                >
                  Order
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Free Guide Modal */}
        {freeGuideModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6 relative">
              <button
                onClick={() => {
                  setFreeGuideModal(false);
                  setEmail("");
                }}
                className="absolute top-4 right-4 text-muted hover:text-charcoal"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-4">
                  <CheckCircle className="w-12 h-12 text-teal mx-auto mb-4" />
                  <p className="text-charcoal font-medium">On its way!</p>
                </div>
              ) : (
                <>
                  <h3 className="text-lg font-bold text-charcoal mb-4">
                    The EU AI Act for Irish Small Organisations
                  </h3>
                  <form
                    action={MAILERLITE_ACTION_URL}
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <label
                      htmlFor="guide-email"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Where should we send it?
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        id="guide-email"
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
                        Send it
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
