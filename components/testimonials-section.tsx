"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Richardson",
    role: "Business Owner",
    location: "New York, USA",
    image: "MR",
    rating: 5,
    text: "I was skeptical at first, but after investing $150K with EliteTrading, my portfolio has grown beyond expectations. The personal broker assigned to me is incredibly knowledgeable and responsive.",
    profit: "+32% in 8 months",
  },
  {
    name: "Sarah Chen",
    role: "Retired Executive",
    location: "San Francisco, USA",
    image: "SC",
    rating: 5,
    text: "The level of service is unmatched. My broker keeps me informed about every opportunity and risk. I started with $200 to test the platform, and within weeks I increased my investment to $100K.",
    profit: "+28% in 6 months",
  },
  {
    name: "David Thompson",
    role: "Real Estate Investor",
    location: "Miami, USA",
    image: "DT",
    rating: 5,
    text: "Finally, a platform that understands serious investors. The tools, the insights, and most importantly, the brokers are world-class. Best decision I made for my investment portfolio.",
    profit: "+45% in 12 months",
  },
  {
    name: "Jennifer Martinez",
    role: "Tech Entrepreneur",
    location: "Austin, USA",
    image: "JM",
    rating: 5,
    text: "What sets EliteTrading apart is their transparency and dedication. I can track everything in real-time, and my broker is always just a call away. Highly recommend for anyone serious about investing.",
    profit: "+38% in 9 months",
  },
  {
    name: "Robert Williams",
    role: "Hedge Fund Manager",
    location: "Chicago, USA",
    image: "RW",
    rating: 5,
    text: "As someone who works in finance, I have high standards. EliteTrading exceeded them. Their institutional-grade tools and expert analysis have become invaluable to my personal investments.",
    profit: "+52% in 14 months",
  },
  {
    name: "Amanda Foster",
    role: "Medical Professional",
    location: "Boston, USA",
    image: "AF",
    rating: 5,
    text: "I don't have time to manage investments actively, so having a dedicated broker who truly understands my goals has been life-changing. Started with the minimum and never looked back.",
    profit: "+26% in 7 months",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Thousands of Investors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about their experience with EliteTrading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-background border border-border rounded-xl p-6 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-muted-foreground text-sm flex-grow mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Profit badge */}
              <div className="inline-flex self-start items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {testimonial.profit}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-semibold text-sm">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-3xl font-bold text-foreground">15,000+</p>
            <p className="text-sm text-muted-foreground">Happy Investors</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-3xl font-bold text-foreground">98%</p>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
