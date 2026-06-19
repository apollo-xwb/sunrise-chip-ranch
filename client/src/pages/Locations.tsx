import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, MapPin, Phone, Clock } from "lucide-react";

export default function Locations() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-display font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
              <img src="/images/logo/sunrise-logo.png" alt="Sunrise Chip 'n Ranch" className="h-10 w-auto" />
              <span className="hidden sm:inline">Sunrise</span>
            </a>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#menu">
              <a className="text-sm font-medium hover:text-primary transition-colors">Menu</a>
            </Link>
            <Link href="/story">
              <a className="text-sm font-medium hover:text-primary transition-colors">Our Story</a>
            </Link>
            <Link href="/locations">
              <a className="text-sm font-medium hover:text-primary transition-colors">Locations</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Home</span>
            </a>
          </Link>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">Our Locations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visit us in Cape Town for the authentic Sunrise Chip 'n Ranch experience. The Biggest, The Best, The Boldest!
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Cape Town */}
            <Card className="border-primary/20 hover:shadow-lg transition-shadow overflow-hidden">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-3xl text-primary">Mowbray, Cape Town</CardTitle>
                <p className="text-muted-foreground mt-2">Our Cape Town Branch</p>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary mb-2">Address</h3>
                        <p className="text-foreground">Mowbray</p>
                        <p className="text-foreground">Cape Town</p>
                        <p className="text-foreground">South Africa</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary mb-2">Phone</h3>
                        <p className="text-foreground">Available via delivery platforms</p>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-primary mb-2">Hours</h3>
                        <p className="text-foreground">Contact us for current hours</p>
                      </div>
                    </div>
                  </div>

                  {/* Order Buttons */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-bold text-primary mb-4">Order Online</h3>
                    <a 
                      href="https://www.ubereats.com/za/store/sunrise-chip-n-ranch-cape-town/HfCnhZQAR8mNK_jgrQHCYg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src="/images/logo/ubereats-badge.jpg" 
                        alt="Order on Uber Eats" 
                        className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </a>
                    <a 
                      href="https://www.mrd.com/delivery/restaurant/sunrise-chip-n-ranch-mowbray/35632" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition-opacity"
                    >
                      <img 
                        src="/images/logo/mrd-badge.png" 
                        alt="Order on Mr D" 
                        className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                      />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Box */}
          <Card className="mt-12 border-primary/20 bg-primary/5">
            <CardContent className="pt-8">
              <p className="text-lg text-foreground leading-relaxed">
                Sunrise Chip 'n Ranch expanded to Cape Town in 1999, establishing our second branch. Over the years, we've built a loyal customer base, with many customers continuing to support us to this day. Even customers who have relocated outside of South Africa make it a priority to visit Sunrise Chip 'n Ranch as one of their first stops whenever they return.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 border-t border-border py-12">
        <div className="container max-w-7xl mx-auto px-4 text-center text-muted-foreground">
          <p className="font-display font-bold text-primary text-lg mb-2">The Biggest, The Best, The Boldest!</p>
          <p>Sunrise Chip 'n Ranch — A Durban Legend Since 1990</p>
        </div>
      </footer>
    </div>
  );
}
