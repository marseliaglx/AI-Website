import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen bg-white pt-16 flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left Column - 60% */}
          <div className="lg:col-span-3 space-y-6">
            {/* Eyebrow */}
            <p className="text-sm font-medium text-teal tracking-wide">
              For Irish small businesses, schools, and community organisations
            </p>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              {"Using AI like "}
              <span className="relative inline-block">
                ChatGPT
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6C40 2 100 2 198 6"
                    stroke="#1B9AAA"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              {" or Claude in your business?"}
            </h1>
            {/* Urgency/Problem Statement */}
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium italic text-navy">
              You may already have legal obligations and create risks.
            </p>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl lg:text-2xl font-light text-charcoal max-w-2xl leading-relaxed">
              From writing emails to creating marketing content, everyday AI use
              can create hidden risks under the EU AI Act and GDPR even for
              small Irish businesses, schools, and community organisations.
              SafeAI helps Irish SMEs use AI confidently, meet their EU AI Act
              obligations, and stop worrying about it on a Tuesday evening.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#quiz"
                className="inline-flex items-center justify-center rounded-md bg-teal px-8 py-4 text-lg font-medium text-white hover:bg-teal/90 transition-colors"
              >
                Take the 2-minute check
              </Link>
              <Link
                href="#free-tools"
                className="inline-flex items-center justify-center text-charcoal text-base hover:text-teal transition-colors"
              >
                Or download the free Irish SME AI Risk Checklist
              </Link>
            </div>


          </div>

          {/* Right Column - Robot Mascot */}
          <div className="lg:col-span-2 flex items-center justify-center relative">
            {/* Soft teal half-circle background */}
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-radial from-soft-teal to-transparent opacity-60" />
            <div className="absolute w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-soft-teal/40 -bottom-8 -right-8" />
            <Image
              src="/safeai-logo.png"
              alt="SafeAI friendly robot mascot"
              width={400}
              height={400}
              className="relative z-10 w-48 sm:w-64 lg:w-80 h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
