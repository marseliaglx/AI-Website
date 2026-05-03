import Image from "next/image";
import Link from "next/link";
import { Linkedin, Facebook } from "lucide-react";

const quickLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#quiz", label: "Quiz" },
  { href: "#free-tools", label: "Free tools" },
  { href: "#guides", label: "Guides" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

// TODO: replace with real URLs
const CALCOM_URL = "https://cal.com/safeai/call";
const LINKEDIN_URL = "https://linkedin.com/company/safeai-ie";
const FACEBOOK_URL = "https://facebook.com/safeai.ie";

export function Footer() {
  return (
    <footer className="bg-navy py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Logo & Info */}
          <div className="space-y-4">
            <Image
              src="/safeai-logo.png"
              alt="SafeAI"
              width={120}
              height={48}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 text-sm">AI Training & Compliance</p>
            <p className="text-white/60 text-sm">Cork, Ireland</p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:marcela@safeai.ie"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  marcela@safeai.ie
                </a>
              </li>
              <li>
                <a
                  href={CALCOM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Book a call
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="SafeAI on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="SafeAI on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-white/50">
            <span>© 2026 SafeAI</span>
            <span>·</span>
            <a href="mailto:marcela@safeai.ie" className="hover:text-white/70 transition-colors">
              marcela@safeai.ie
            </a>
            <span>·</span>
            <span>This site is general information, not legal advice.</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </Link>
            <span>·</span>
            <Link href="/cookies" className="hover:text-white/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
