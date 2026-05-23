"use client";

import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenModal: () => void;
}

export function CTASection({ onOpenModal }: CTASectionProps) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            Join thousands of successful investors who have already secured
            their financial future with our platform.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 bg-primary hover:brightness-110 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all shadow-lg shadow-primary/25"
          >
            Get Access Now
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="mt-6 text-sm text-muted-foreground">
            Start with just $200 • Limited spots available • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}
