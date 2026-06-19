import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChefHat, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
            <img src="/images/logo/sunrise-logo.png" alt="Sunrise Chip 'n Ranch" className="h-10 w-auto" />
            <span className="hidden sm:inline">Sunrise</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
            <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">Gallery</Link>
            <Link href="/story" className="text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
            <Link href="/founders" className="text-sm font-medium hover:text-primary transition-colors">Founders</Link>
            <Link href="/locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Table Mountain Background */}
      <section 
        className="relative overflow-hidden py-20 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(27, 94, 27, 0.85) 0%, rgba(74, 144, 226, 0.75) 100%), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop")',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-8">
              <div className="w-full max-w-sm">
                <img 
                  src="/images/logo/sunrise-logo.png" 
                  alt="Sunrise Chip 'n Ranch Logo" 
                  className="w-full h-auto drop-shadow-lg"
                />
              </div>
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                  The Biggest, The Best, The Boldest!
                </h1>
                <p className="text-lg text-muted-foreground max-w-md">
                  A Durban legend since 1991. Experience the iconic rotis, curries, and street food that define South African culinary excellence.
                </p>
              </div>
            </div>

            {/* Right: Order Buttons */}
            <div className="flex flex-col gap-6 items-center md:items-end">
              <div className="w-full max-w-sm space-y-3">
                <h2 className="text-2xl font-display font-bold text-center md:text-right">Order Now</h2>

                {/* Uber Eats Button */}
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

                {/* Mr D Button */}
                <a 
                  href="https://www.mrd.com/delivery/restaurant/sunrise-chip-n-ranch-overport-overport/28602" 
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
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Our Signature Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafted with passion and tradition, each dish represents the bold flavors of Durban street food culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chip 'n Cheese Roti */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Chip 'n Cheese Roti</CardTitle>
                <CardDescription>The Crown Jewel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Massive roti filled with crispy slap chips, melted cheese, and your choice of curry. A legendary combination that defines our brand.
                </p>
                <p className="text-lg font-semibold text-primary">From R80</p>
              </CardContent>
            </Card>

            {/* Mutton Curry Roti */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Mutton Curry Roti</CardTitle>
                <CardDescription>Hearty & Spiced</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Tender mutton in a rich, aromatic curry wrapped in our signature roti. Perfect for those who love authentic Durban flavors.
                </p>
                <p className="text-lg font-semibold text-primary">From R100</p>
              </CardContent>
            </Card>

            {/* Bunny Chow */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Bunny Chow</CardTitle>
                <CardDescription>Durban Classic</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  A hollowed-out loaf of bread filled with your choice of curry. A true Durban icon served fresh and piping hot.
                </p>
                <p className="text-lg font-semibold text-primary">From R60</p>
              </CardContent>
            </Card>

            {/* Gatsby */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Gatsby</CardTitle>
                <CardDescription>The Ultimate Feast</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  A massive sandwich loaded with chips, meat, and sauces. Designed for sharing or for those with serious appetites.
                </p>
                <p className="text-lg font-semibold text-primary">From R150</p>
              </CardContent>
            </Card>

            {/* Breyani */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Breyani</CardTitle>
                <CardDescription>Fragrant Rice Perfection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Fragrant basmati rice layered with tender meat and aromatic spices. A complete meal in one plate.
                </p>
                <p className="text-lg font-semibold text-primary">From R120</p>
              </CardContent>
            </Card>

            {/* Chips & Curry */}
            <Card className="hover:shadow-lg transition-shadow duration-300 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Chips & Curry</CardTitle>
                <CardDescription>Simple Perfection</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Golden, crispy slap chips topped with your choice of rich, flavorful curry. A timeless combination.
                </p>
                <p className="text-lg font-semibold text-primary">From R50</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="/menu" className="inline-block">
              <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md transition-colors">
                View Full Menu
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 md:py-32 bg-primary/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Story */}
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ChefHat className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-primary">Our Legacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Founded in 1991 by Baboo Birjanund, we've been serving Durban with passion and authenticity for over three decades.
                </p>
                <Link href="/story" className="text-primary font-semibold hover:text-primary/80 transition-colors">Learn Our Story →</Link>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-primary">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Find us at our Overport Durban flagship location or our Mowbray Cape Town branch.
                </p>
                <Link href="/locations" className="text-primary font-semibold hover:text-primary/80 transition-colors">View Locations →</Link>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-primary">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-4">
                  Call us or follow us on social media for the latest updates and special offers.
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:text-primary/80 transition-colors">Contact Us →</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Sunrise Chip 'n Ranch</h3>
              <p className="text-white/80 text-sm">The Biggest, The Best, The Boldest!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><Link href="/#menu" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Order Online</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="https://www.ubereats.com/za" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Uber Eats</a></li>
                <li><a href="https://www.mrd.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mr D Food</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/p/Sunrise-Chip-n-Ranch-Johnnys-100083899913658/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/sunrise_chip_n_ranch_johnnys/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2026 Sunrise Chip 'n Ranch. All rights reserved. | Est. 1991 | Johnny's Rotis Legacy</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
