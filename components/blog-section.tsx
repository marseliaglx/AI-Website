"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    slug: "eu-ai-act-what-irish-smes-need-to-know",
    category: "EU AI Act",
    title: "EU AI Act: What Irish SMEs Need to Know in 2024",
    excerpt:
      "The EU AI Act came into force in August 2024. Here's a plain-English breakdown of what it means for your small business.",
    date: "2024-12-15",
    readTime: "5 min read",
  },
  {
    slug: "chatgpt-workplace-policy-template",
    category: "Policies",
    title: "Creating a ChatGPT Workplace Policy: A Step-by-Step Guide",
    excerpt:
      "Your staff are already using AI. Here's how to create a sensible policy that protects your business without killing productivity.",
    date: "2024-12-08",
    readTime: "7 min read",
  },
  {
    slug: "gdpr-and-ai-tools-compliance-checklist",
    category: "GDPR",
    title: "GDPR and AI Tools: Your Compliance Checklist",
    excerpt:
      "Using AI tools with customer data? Make sure you're ticking these GDPR boxes before the DPC comes knocking.",
    date: "2024-11-28",
    readTime: "6 min read",
  },
  {
    slug: "ai-risk-assessment-small-business",
    category: "Risk Management",
    title: "How to Run an AI Risk Assessment for Your Small Business",
    excerpt:
      "You don't need a compliance team to assess AI risks. Here's a practical framework any SME owner can follow.",
    date: "2024-11-20",
    readTime: "8 min read",
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function BlogSection() {
  return (
    <section id="blog" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-teal tracking-widest uppercase mb-4">
            From the Blog
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Practical AI compliance insights
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            No jargon, no scare tactics. Just clear guidance on using AI safely
            and legally in your Irish business.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg border border-cream overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-soft-teal text-teal text-xs font-medium mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-charcoal mb-2 group-hover:text-teal transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-teal font-medium hover:underline"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
