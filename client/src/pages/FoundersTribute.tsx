import { useState } from "react";
import { Link } from "wouter";

const FOUNDERS_IMG = "/images/founders/founders-baboo-lala.png";

export default function FoundersTribute() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tribute Post"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
            <img src="/images/logo/sunrise-logo.png" alt="Sunrise Chip 'n Ranch" className="h-10 w-auto" />
            <span className="hidden sm:inline">Sunrise</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/menu" className="text-sm font-medium hover:text-secondary transition-colors">Menu</Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-secondary transition-colors">Gallery</Link>
            <Link href="/our-story" className="text-sm font-medium hover:text-secondary transition-colors">Our Story</Link>
            <Link href="/founders" className="text-sm font-medium text-secondary">Founders</Link>
            <Link href="/locations" className="text-sm font-medium hover:text-secondary transition-colors">Locations</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-secondary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-4">The Founders</h1>
          <p className="text-xl text-muted-foreground">Meet Baboo & Lala — The Visionaries Behind the Legend</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Founder Photo */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={FOUNDERS_IMG}
                alt="Baboo and Lala - Founders of Sunrise Chip 'n Ranch"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === idx
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {activeTab === 0 && (
              <>
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-6">A Legacy Built on Passion</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      In 1990, Baboo Birjanund and his wife Premila Devi Manilal founded Sunrise Chip 'n Ranch in Durban, South Africa. What began as a simple vision—to serve authentic, bold, and delicious street food—has evolved into a legendary institution.
                    </p>
                    <p>
                      Known affectionately as "Johnny's Rotis," their establishment became synonymous with the biggest, most flavorful rotis in Durban. The couple's dedication to quality, authenticity, and customer satisfaction transformed a humble food stall into a cultural landmark.
                    </p>
                    <p>
                      In 1999, their success led to an expansion to Cape Town's Mowbray neighborhood, bringing the Sunrise Chip 'n Ranch experience to a new generation of food lovers. Today, under the leadership of their son Vikash Birjanund, the brand continues to honor the founders' legacy while innovating for the future.
                    </p>
                    <p className="text-primary font-semibold pt-4">
                      "The Biggest, The Best, The Boldest!" — A promise kept for over three decades.
                    </p>
                  </div>
                </div>

                <div className="bg-card border-2 border-primary/20 rounded-xl p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Baboo Birjanund</h3>
                      <p className="text-secondary font-semibold mb-3">Founder & Visionary</p>
                      <p className="text-muted-foreground">
                        A pioneer of authentic Durban cuisine, Baboo's passion for creating the perfect roti shaped an entire food culture. His commitment to excellence and innovation continues to inspire the brand today.
                      </p>
                    </div>
                    <div className="border-t border-border pt-6">
                      <h3 className="text-2xl font-bold text-primary mb-2">Premila Devi Manilal</h3>
                      <p className="text-secondary font-semibold mb-3">Co-Founder & Heart of the Kitchen</p>
                      <p className="text-muted-foreground">
                        Premila's culinary expertise and dedication to quality ingredients were instrumental in perfecting the Sunrise Chip 'n Ranch recipes. Her warmth and hospitality defined the brand's welcoming spirit.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Legacy Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1990</div>
              <p className="text-muted-foreground">Founded in Durban</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">1999</div>
              <p className="text-muted-foreground">Expanded to Cape Town</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">5.2 kg</div>
              <p className="text-muted-foreground">Record Roti Weight</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">3+</div>
              <p className="text-muted-foreground">Decades of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 Sunrise Chip 'n Ranch. All rights reserved.</p>
          <p className="text-sm opacity-90">The Biggest, The Best, The Boldest!</p>
        </div>
      </footer>
    </div>
  );
}
