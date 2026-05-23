export function NewsLogos() {
  const newsOutlets = [
    { name: "Bloomberg", letters: "Bloomberg" },
    { name: "CNBC", letters: "CNBC" },
    { name: "Forbes", letters: "Forbes" },
    { name: "Reuters", letters: "Reuters" },
    { name: "WSJ", letters: "Wall Street Journal" },
    { name: "Financial Times", letters: "Financial Times" },
  ];

  return (
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-widest">
          As Featured In
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {newsOutlets.map((outlet) => (
            <div
              key={outlet.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <span className="text-lg md:text-xl font-semibold tracking-tight">
                {outlet.letters}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
