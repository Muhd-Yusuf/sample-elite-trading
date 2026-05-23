"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AssetTicker } from "@/components/asset-ticker";
import { NewsLogos } from "@/components/news-logos";
import { BrokerSection } from "@/components/broker-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LeadFormModal } from "@/components/lead-form-modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={openModal} />
      <AssetTicker />
      <HeroSection onOpenModal={openModal} />
      <NewsLogos />
      <StatsSection />
      <FeaturesSection />
      <BrokerSection />
      <HowItWorksSection onOpenModal={openModal} />
      <TestimonialsSection />
      <CTASection onOpenModal={openModal} />
      <Footer />
      <LeadFormModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
