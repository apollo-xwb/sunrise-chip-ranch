import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const menuItems = [
  {
    category: "Rotis",
    items: [
      {
        name: "Chip 'n Cheese Roti",
        description: "The crown jewel of our menu. Massive roti filled with crispy slap chips, melted cheese, and your choice of curry. A legendary combination that defines our brand.",
        price: "From R80",
        highlight: true
      },
      {
        name: "Mutton Curry Roti",
        description: "Tender mutton in a rich, aromatic curry wrapped in our signature roti. Perfect for those who love authentic Durban flavors with a spicy kick.",
        price: "From R100",
      },
      {
        name: "Chicken Curry Roti",
        description: "Succulent chicken pieces in a fragrant curry sauce, perfectly balanced with our soft, pillowy roti.",
        price: "From R85",
      },
      {
        name: "Bean Curry Roti",
        description: "A vegetarian favorite. Hearty beans in a rich curry sauce, wrapped in our signature roti.",
        price: "From R60",
      }
    ]
  },
  {
    category: "Bunny Chows",
    items: [
      {
        name: "1/4 Mutton Bunny Chow",
        description: "A quarter loaf of bread hollowed out and filled with tender mutton curry. Perfect for a light meal.",
        price: "From R50",
      },
      {
        name: "1/2 Mutton Bunny Chow",
        description: "Half a loaf filled with generous portions of mutton curry. A complete meal in one package.",
        price: "From R80",
      },
      {
        name: "Full Mutton Bunny Chow",
        description: "The ultimate Durban classic. A full loaf of bread filled to the brim with rich mutton curry.",
        price: "From R120",
      },
      {
        name: "Chicken Bunny Chow",
        description: "Succulent chicken curry served in a hollowed-out loaf. A lighter alternative to mutton.",
        price: "From R90",
      }
    ]
  },
  {
    category: "Gatsby",
    items: [
      {
        name: "Mutton Gatsby",
        description: "A massive sandwich loaded with crispy chips, tender mutton, and our signature sauces. Designed for sharing or for serious appetites.",
        price: "From R150",
        highlight: true
      },
      {
        name: "Chicken Gatsby",
        description: "Succulent chicken, golden chips, and fresh vegetables in a long sandwich. A lighter take on the classic.",
        price: "From R140",
      },
      {
        name: "Full House Gatsby",
        description: "The ultimate feast. Loaded with multiple proteins, chips, salad, and all the trimmings.",
        price: "From R180",
      }
    ]
  },
  {
    category: "Breyani & Rice Dishes",
    items: [
      {
        name: "Mutton Breyani",
        description: "Fragrant basmati rice layered with tender mutton and aromatic spices. A complete meal in one plate.",
        price: "From R120",
      },
      {
        name: "Chicken Breyani",
        description: "Succulent chicken pieces with fragrant rice and traditional spices. Light yet satisfying.",
        price: "From R110",
      },
      {
        name: "Meat Curry & Rice",
        description: "Your choice of curry served over fluffy white rice. A classic combination.",
        price: "From R90",
      }
    ]
  },
  {
    category: "Sides & Extras",
    items: [
      {
        name: "Chips & Curry",
        description: "Golden, crispy slap chips topped with your choice of rich, flavorful curry.",
        price: "From R50",
      },
      {
        name: "Slap Chips",
        description: "Thick-cut, crispy chips. The perfect side or snack.",
        price: "From R30",
      },
      {
        name: "Mutton Burgers (5)",
        description: "Five delicious mutton burgers with crispy chips and a refreshing drink.",
        price: "R150",
      }
    ]
  }
];

export default function Menu() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">Our Full Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the complete range of authentic Durban street food, crafted with passion and tradition since 1991.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          {menuItems.map((section, idx) => (
            <div key={idx} className="mb-20">
              <h2 className="text-4xl font-display font-bold text-primary mb-12 pb-4 border-b-2 border-primary/20">
                {section.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item, itemIdx) => (
                  <Card 
                    key={itemIdx} 
                    className={`hover:shadow-lg transition-all duration-300 ${item.highlight ? 'border-primary/50 bg-primary/5' : 'border-primary/20'}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-primary text-xl">{item.name}</CardTitle>
                          {item.highlight && (
                            <span className="inline-block mt-2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                              ★ Our Signature
                            </span>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <p className="text-lg font-semibold text-primary">
                        {item.price}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold text-primary mb-6">Ready to Order?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Biggest, The Best, The Boldest! Order now from your favorite delivery platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a 
              href="https://www.ubereats.com/za/store/sunrise-chip-n-ranch-cape-town/HfCnhZQAR8mNK_jgrQHCYg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block flex-1 hover:opacity-90 transition-opacity"
            >
              <img 
                src="/images/logo/ubereats-badge.jpg" 
                alt="Order on Uber Eats" 
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
            <a 
              href="https://www.mrd.com/delivery/restaurant/sunrise-chip-n-ranch-overport-overport/28602" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block flex-1 hover:opacity-90 transition-opacity"
            >
              <img 
                src="/images/logo/mrd-badge.png" 
                alt="Order on Mr D" 
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              />
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
