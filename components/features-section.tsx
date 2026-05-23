"use client";

import {
  Shield,
  TrendingUp,
  Clock,
  Headphones,
  BarChart3,
  Lock,
  Globe,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your investments are protected by military-grade encryption and multi-factor authentication.",
  },
  {
    icon: TrendingUp,
    title: "Expert Market Analysis",
    description:
      "Access daily insights and reports from our team of seasoned market analysts.",
  },
  {
    icon: Clock,
    title: "24/7 Trading",
    description:
      "Trade global markets around the clock with real-time execution and minimal latency.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Your personal broker is available whenever you need guidance or have questions.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Powerful charting tools and AI-driven insights to inform your investment decisions.",
  },
  {
    icon: Lock,
    title: "Regulated Platform",
    description:
      "Fully licensed and regulated by major financial authorities worldwide.",
  },
  {
    icon: Globe,
    title: "Global Markets",
    description:
      "Access stocks, forex, commodities, crypto, and more from a single platform.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Execute trades in milliseconds with our cutting-edge trading infrastructure.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose EliteTrading?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with personalized service to
            deliver an unmatched trading experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
