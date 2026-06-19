import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft, Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions? We would love to hear from you. Reach out to us through any of these channels.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-primary mb-8">Contact Information</h2>

              {/* Phone */}
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <CardTitle className="text-primary">Call Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:0645422766" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
                    064 542 2766
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Contact us for current hours and availability
                  </p>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <CardTitle className="text-primary">Visit Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Cape Town Location</p>
                    <p className="text-muted-foreground">
                      Mowbray<br />
                      Cape Town<br />
                      South Africa
                    </p>
                  </div>
                  <Link href="/locations">
                    <a className="text-primary font-semibold hover:text-primary/80 transition-colors inline-flex items-center gap-2">
                      View All Locations →
                    </a>
                  </Link>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <CardTitle className="text-primary">Email Us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="mailto:Sunrise1wp@gmail.com" className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all">
                    Sunrise1wp@gmail.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you as soon as possible
                  </p>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-primary/20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Stay updated with our latest offers, menu items, and news from Sunrise Chip 'n Ranch.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.facebook.com/p/Sunrise-Chip-n-Ranch-Johnnys-100083899913658/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </a>
                    <a 
                      href="https://www.instagram.com/sunrise_chip_n_ranch_johnnys/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors font-semibold"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Order Online */}
              <Card className="border-primary/20 bg-primary/5 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">Order Online</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Can't visit in person? Order from your favorite delivery platform.
                  </p>
                  <div className="space-y-3">
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
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="space-y-8">
              <h2 className="text-3xl font-display font-bold text-primary mb-8">Find Us on the Map</h2>
              
              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-primary/20 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.5938903999987!2d18.4241!3d-33.9249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d5d5d5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sMowbray%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sunrise Chip 'n Ranch Location"
                ></iframe>
              </div>

              {/* Quick Info */}
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Operating Hours</p>
                      <p className="text-sm text-muted-foreground">Contact us for current hours</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Mowbray, Cape Town</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">Delivery</p>
                      <p className="text-sm text-muted-foreground">Available via Uber Eats & Mr D</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary/5 py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">What are your operating hours?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Our Cape Town location is open for orders through Uber Eats and Mr D Food. Contact us at 064 542 2766 for current hours and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Do you offer delivery?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Yes! We deliver through Uber Eats and Mr D Food. You can order online from your favorite platform and have your food delivered to your door.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Are your rotis vegetarian?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  We offer both meat and vegetarian options. Our bean curry roti is a popular vegetarian choice. Please check our menu or call us for all vegetarian options.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Can I make a large order for an event?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Absolutely! We love catering for events and celebrations. Please call us at 064 542 2766 to discuss your requirements and place a large order.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">What makes your rotis special?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground">
                  Our rotis are made fresh daily using traditional recipes and the finest ingredients. We are recognized for making the largest and most delicious rotis in South Africa. It's not just about size—it's about quality, tradition, and passion in every bite.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">Ready to Experience the Legend?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Biggest, The Best, The Boldest! Visit us or order online today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/locations">
              <a>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                  Visit Us
                </Button>
              </a>
            </Link>
            <a 
              href="https://www.ubereats.com/za/store/sunrise-chip-n-ranch-cape-town/HfCnhZQAR8mNK_jgrQHCYg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-black hover:bg-black/90 text-white font-semibold">
                Order Now
              </Button>
            </a>
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
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#menu" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/story" className="hover:text-white transition-colors">Our Story</Link></li>
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
                  <span className="text-sm">Facebook</span>
                </a>
                <a href="https://www.instagram.com/sunrise_chip_n_ranch_johnnys/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  <span className="text-sm">Instagram</span>
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
