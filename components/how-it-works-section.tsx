"use client";

import { ArrowRight } from "lucide-react";

interface HowItWorksSectionProps {
  onOpenModal: () => void;
}

const steps = [
  {
    number: "01",
    title: "Create Your Account",
    description:
      "Start with just $200 to experience our platform. Quick verification process gets you trading in minutes.",
  },
  {
    number: "02",
    title: "Meet Your Broker",
    description:
      "Get assigned a dedicated broker who will understand your financial goals and risk tolerance.",
  },
  {
    number: "03",
    title: "Build Your Strategy",
    description:
      "Work with your broker to create a personalized investment strategy tailored to your objectives.",
  },
  {
    number: "04",
    title: "Start Growing",
    description:
      "Execute trades, monitor your portfolio, and watch your investments grow with expert guidance.",
  },
];

export function HowItWorksSection({ onOpenModal }: HowItWorksSectionProps) {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is simple. Follow these steps to begin your
            investment journey with EliteTrading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-primary hover:brightness-110 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-primary/25"
          >
            Get Access Now
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Start with just $200 • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
}
