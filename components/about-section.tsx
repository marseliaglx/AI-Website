export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-10 gap-8 lg:gap-12 items-start">
          {/* Photo Column - 30% */}
          <div className="lg:col-span-3">
            {/* Placeholder for Marcela's real photograph */}
            <div className="aspect-[3/4] bg-cream rounded-lg flex items-center justify-center">
              <p className="text-muted text-sm text-center px-4">
                [Marcela&apos;s photograph]
              </p>
            </div>
          </div>

          {/* Text Column - 70% */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-sm font-medium text-teal tracking-widest uppercase">
              About
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-balance">
              {"I'm Marcela. I make complex things make sense to ordinary people."}
            </h2>

            <div className="space-y-5 text-ink leading-relaxed">
              <p>
                I started in the European Parliament, where I learned that the
                difference between a regulation working and a regulation failing
                is whether someone bothered to write it in plain English. Then I
                spent fifteen years in big tech, at Microsoft and VMware, mostly
                translating engineer-speak into something the rest of the
                company could act on.
              </p>

              {/* Pull-quote block */}
              <blockquote className="border-l-4 border-teal pl-5 py-2 text-lg font-light italic text-charcoal">
                AI is a powerful tool. Used with humans in mind, it can
                genuinely empower a small business. Used carelessly, it can
                quietly risk everything you&apos;ve built&mdash;your customer trust,
                your data, your reputation. Nobody knows yet exactly which AI
                skills will matter most in three years. What we do know is that
                the small organisations that get ahead of this now will not be
                left behind.
              </blockquote>

              <p>
                I hold a Master&apos;s in Public Administration in the European
                Legal System from the University of Opole. I am also completing
                two further university-led programmes: AI in Business and
                Digital Transformation, both delivered through the EU-funded
                Digital4Business consortium of Bologna, the National College of
                Ireland, Linköping, and NOVA IMS.
              </p>

              <p className="text-sm font-light italic text-teal">
                I run SafeAI from Cork. Bilingual English and Polish. No jargon,
                no formality, no upselling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
