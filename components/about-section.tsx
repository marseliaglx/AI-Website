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

            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal">
              I&apos;m Marcela. I have spent fifteen years making complex things make
              sense to ordinary people.
            </h2>

            <div className="space-y-4 text-ink leading-relaxed">
              <p>
                I built knowledge operations for Microsoft, VMware, EA Games,
                and Blizzard, where the day job was translating engineer-speak
                into something the rest of the company could act on. Before that
                I was Chief of Staff to a Member of the European Parliament,
                which is where I learned that the difference between regulation
                working and regulation failing is whether someone bothered to
                write it in plain English.
              </p>
              <p>
                I am CeADAR-trained on the EU AI Act, currently completing the
                AI in Business microcredential at Digital4Business, and
                bilingual in English and Polish. I run SafeAI from Cork because
                the Irish small businesses, schools, and community organisations
                I work with deserve a real human, not an AI startup pitch deck.
              </p>
            </div>

            <p className="text-xl font-light italic text-teal pt-4">
              Use AI. Stay safe. Sleep at night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
