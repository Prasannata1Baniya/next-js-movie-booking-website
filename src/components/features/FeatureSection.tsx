const features = [
  {
    icon: "🎟",
    title: "Easy Booking",
    description: "Book movie tickets in just a few clicks.",
  },
  {
    icon: "⚡",
    title: "Fast & Secure",
    description: "Quick booking with a secure experience.",
  },
  {
    icon: "🏢",
    title: "Multiple Theatres",
    description: "Choose from various theatres and showtimes.",
  },
  {
    icon: "🎬",
    title: "Latest Movies",
    description: "Discover the newest blockbuster releases.",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-text-primary">
          Why Choose CineBook?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl bg-surface-secondary p-6 text-center"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold text-text-primary">
                {feature.title}
              </h3>

              <p className="mt-3 text-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}