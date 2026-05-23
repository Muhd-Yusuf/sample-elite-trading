"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  const benefits = [
    "Start with just $200 initial investment",
    "Access to exclusive market insights",
    "Personal broker assigned to your account",
    "Advanced trading tools & analytics",
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Exclusive Access for Qualified Investors
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            Premium Trading Platform for{" "}
            <span className="text-primary">Serious Investors</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join an exclusive community of investors who trust our expert
            brokers. Start with just $200 and scale up to $100K+ portfolios.
            Experience institutional-grade trading.
          </p>

          {/* CTA Button */}
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-primary hover:brightness-110 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-primary/25"
          >
            Get Access Now
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Benefits */}
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-left"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
