import { Shield, Award, Users, TrendingUp } from "lucide-react";

export function BrokerSection() {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Regulated",
      description:
        "Our brokers are fully licensed and regulated by top financial authorities worldwide.",
    },
    {
      icon: Award,
      title: "Award-Winning Team",
      description:
        "Recognized as industry leaders with multiple awards for excellence in trading services.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description:
        "Personal account managers available 24/7 to guide your investment journey.",
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description:
        "Over $2.5 billion in managed assets with consistent returns for our clients.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Work With Elite Brokers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Our team of expert brokers brings decades of combined experience in
            global markets, ensuring your investments are in the best hands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
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
