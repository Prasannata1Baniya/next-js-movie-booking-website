import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import GenreSection from "@/components/genre/GenreSection";
import FeatureSection from "@/components/features/FeatureSection";
import MovieSection from "@/components/movie/MovieSection";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-primary">
      
      <Navbar />

      <main className="flex-1">
        {children}
      </main>
     
      <GenreSection />
      <FeatureSection />
      <Footer />
    </div>
  );
}