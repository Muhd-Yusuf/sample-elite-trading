export function StatsSection() {
  const stats = [
    { value: "$2.5B+", label: "Assets Under Management" },
    { value: "15,000+", label: "Active Investors" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Expert Support" },
  ];

  return (
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
