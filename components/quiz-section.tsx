"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

type Answer = string | null;

interface QuizState {
  currentStep: number;
  answers: Answer[];
  email: string;
  isSubmitted: boolean;
}

const questions = [
  {
    question:
      "Are you or your staff generating images with AI for marketing or social media?",
    options: ["Yes, regularly", "Sometimes", "Not sure"],
  },
  {
    question:
      "Has anyone in your organisation pasted customer information, client work, or internal documents into an AI tool?",
    options: ["Yes", "Maybe", "Definitely not"],
  },
  {
    question:
      "Do you have a written policy that says what staff can and cannot put into AI tools?",
    options: ["Yes, written and signed", "We talked about it once", "No"],
  },
  {
    question:
      "Have you trained your team on safe AI use in the last twelve months?",
    options: ["Yes, with attendance recorded", "Informally", "No"],
  },
];

function calculateRiskLevel(answers: Answer[]): "Low" | "Medium" | "High" {
  let score = 0;

  answers.forEach((answer, index) => {
    if (!answer) return;

    const options = questions[index].options;
    const answerIndex = options.indexOf(answer);

    // First option is usually safest (except Q1 and Q2 where "Yes" means more AI use)
    if (index <= 1) {
      // For Q1 and Q2, more AI use = more risk if no policy
      if (answerIndex === 0) score += 1;
      else if (answerIndex === 1) score += 0.5;
    } else {
      // For Q3 and Q4, first option is safest
      if (answerIndex === 0) score -= 1;
      else if (answerIndex === 1) score += 0.5;
      else score += 1;
    }
  });

  if (score <= 0) return "Low";
  if (score <= 2) return "Medium";
  return "High";
}

function getRiskInterpretation(level: "Low" | "Medium" | "High"): string {
  switch (level) {
    case "Low":
      return "Based on your answers, your organisation appears to have some awareness of AI risks and may have basic protections in place. That said, the EU AI Act creates new obligations that most Irish businesses are not yet prepared for. A quick review of your current practices would help confirm you are on the right track.";
    case "Medium":
      return "Your organisation is using AI in ways that could create legal or reputational risk under the EU AI Act. The good news is that most of these gaps are straightforward to close. A written policy and some basic training would significantly reduce your exposure.";
    case "High":
      return "Your current AI practices create meaningful risk under the EU AI Act. This is common and fixable. Most Irish SMEs are in a similar position. A structured approach to AI governance, starting with a clear policy and staff training, will address the majority of your exposure.";
  }
}

// TODO: replace with real URL
const MAILERLITE_ACTION_URL = "MAILERLITE_ACTION_URL";

export function QuizSection() {
  const [state, setState] = useState<QuizState>({
    currentStep: 0,
    answers: [null, null, null, null],
    email: "",
    isSubmitted: false,
  });

  const handleAnswer = (answer: string) => {
    const newAnswers = [...state.answers];
    newAnswers[state.currentStep] = answer;

    if (state.currentStep < questions.length - 1) {
      setState({
        ...state,
        answers: newAnswers,
        currentStep: state.currentStep + 1,
      });
    } else {
      setState({
        ...state,
        answers: newAnswers,
        currentStep: state.currentStep + 1,
      });
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to MailerLite
    setState({ ...state, isSubmitted: true });
  };

  const riskLevel = calculateRiskLevel(state.answers);

  return (
    <section id="quiz" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border-l-4 border-teal shadow-lg p-6 sm:p-8">
          {state.currentStep < questions.length ? (
            // Quiz Questions
            <>
              {/* Progress */}
              <div className="mb-6">
                <p className="text-sm text-muted mb-2">
                  Step {state.currentStep + 1} of {questions.length}
                </p>
                <div className="h-2 bg-cream rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal transition-all duration-300"
                    style={{
                      width: `${((state.currentStep + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-charcoal mb-6">
                {questions[state.currentStep].question}
              </h3>

              {/* Answer Buttons */}
              <div className="space-y-3">
                {questions[state.currentStep].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left px-4 py-3 rounded-md border border-cream bg-cream/50 text-ink hover:border-teal hover:bg-soft-teal transition-all focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : !state.isSubmitted ? (
            // Results + Email Capture
            <>
              <div className="text-center mb-6">
                <span
                  className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
                    riskLevel === "Low"
                      ? "bg-green-100 text-green-800"
                      : riskLevel === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                  }`}
                >
                  {riskLevel} exposure
                </span>
              </div>

              <p className="text-ink leading-relaxed mb-8">
                {getRiskInterpretation(riskLevel)}
              </p>

              <form action={MAILERLITE_ACTION_URL} method="POST" onSubmit={handleEmailSubmit}>
                <label
                  htmlFor="quiz-email"
                  className="block text-sm font-medium text-charcoal mb-2"
                >
                  Send me my full report and the free Irish SME AI Risk
                  Checklist
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    id="quiz-email"
                    name="email"
                    required
                    value={state.email}
                    onChange={(e) =>
                      setState({ ...state, email: e.target.value })
                    }
                    placeholder="your@email.ie"
                    className="flex-1 px-4 py-3 rounded-md border border-cream bg-white text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-base font-medium text-white hover:bg-teal/90 transition-colors"
                  >
                    Send it
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            // Thank You State
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-4">
                Check your inbox
              </h3>
              <p className="text-ink leading-relaxed">
                The checklist is on its way. We will follow up with one
                practical email next week, then leave you alone unless you ask
                us not to.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
