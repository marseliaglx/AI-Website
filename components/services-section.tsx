// TODO: replace with real URL
const CALCOM_URL = "https://cal.com/safeai";

const services = [
  {
    title: "Practical AI Safety Workshop",
    description:
      "2.5-hour on-site or remote workshop for teams of up to 20. By the end of it you have your AI Use Inventory, your Acceptable Use Policy, and your Article 4 compliance one-pager.",
    price: "From €800",
    buttonText: "Book a workshop",
    calLink: `${CALCOM_URL}/workshop`,
  },
  {
    title: "AI Readiness Assessment",
    description:
      "One-to-two-day engagement with a written report and prioritised remediation plan. The thing you do before a regulator turns up.",
    price: "From €1,500",
    buttonText: "Book an assessment",
    calLink: `${CALCOM_URL}/assessment`,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-navy py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-teal tracking-widest uppercase mb-4">
            Work With Me Directly
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Two ways I help organisations get this done in a single afternoon
          </h2>
          <p className="text-white/80 font-light max-w-2xl">
            For organisations that want a real human in the room, not another
            PDF.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8"
            >
              <h3 className="text-xl font-bold text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-ink mb-6 leading-relaxed">
                {service.description}
              </p>
              <p className="text-lg font-medium text-charcoal mb-6">
                {service.price}
              </p>
              <a
                href={service.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-teal px-6 py-3 text-base font-medium text-white hover:bg-teal/90 transition-colors"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
