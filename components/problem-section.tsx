import { MessageSquare, FileEdit, Instagram, Image, FileText } from "lucide-react";

const problems = [
  {
    icon: MessageSquare,
    text: 'Asked ChatGPT to "write me a customer email"',
  },
  {
    icon: FileEdit,
    text: 'Pasted client information into an AI tool to "improve it"',
  },
  {
    icon: Instagram,
    text: "Generated Instagram captions or product descriptions with AI",
  },
  {
    icon: Image,
    text: "Created images or logos using Midjourney, ChatGPT, or Canva Magic",
  },
  {
    icon: FileText,
    text: "Asked AI to summarise documents, meetings, or messages",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-teal tracking-widest uppercase mb-4">
          The Problem
        </p>

        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
          If you&apos;ve ever done any of this, you&apos;re already using AI
        </h2>

        {/* Sub-paragraph */}
        <p className="text-lg text-muted mb-12">
          That feels normal. Sometimes it is. Sometimes it is not.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <problem.icon className="w-6 h-6 text-teal mb-4" />
              <p className="text-charcoal">{problem.text}</p>
            </div>
          ))}
        </div>

        {/* Callout Block */}
        <div className="mt-12 bg-soft-teal border-l-4 border-teal rounded-r-lg p-6">
          <p className="text-sm font-bold text-charcoal mb-2 uppercase tracking-wide">
            The Quiet Bit
          </p>
          <p className="text-ink leading-relaxed">
            You might be sharing customer data without realising. AI-generated
            content can accidentally copy existing work. Some tools store and
            reuse what you type. And under the EU AI Act, you are legally
            responsible for what AI produces on your behalf. Even if you are a
            one-person business.
          </p>
        </div>

        {/* Italic Statement */}
        <p className="text-center mt-12 text-xl lg:text-2xl font-light italic text-charcoal">
          You don&apos;t need to stop using AI. You just need to use it properly.
        </p>
      </div>
    </section>
  );
}
