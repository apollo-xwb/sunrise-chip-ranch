import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Mutton Curry",
    description: "Rich, aromatic mutton curry served in a traditional bowl. Tender meat in a perfectly spiced sauce with fresh cilantro garnish.",
    image: "/images/products/mutton curry.PNG",
    category: "Curries"
  },
  {
    id: 2,
    title: "Breyani",
    description: "Fragrant saffron rice layered with tender mutton pieces and aromatic spices. A complete meal in one plate.",
    image: "/images/products/IMG_4249.PNG",
    category: "Rice Dishes"
  },
  {
    id: 3,
    title: "Bunny Chow - Full",
    description: "The iconic Durban classic. A full loaf of bread hollowed out and filled to the brim with rich mutton curry.",
    image: "/images/products/IMG_4248.PNG",
    category: "Bunny Chows"
  },
  {
    id: 4,
    title: "Bunny Chow - Half",
    description: "Half a loaf of bread filled with generous portions of mutton curry. Perfect for a lighter meal.",
    image: "/images/products/IMG_4247.PNG",
    category: "Bunny Chows"
  },
  {
    id: 5,
    title: "Gatsby - Plated",
    description: "Our signature Gatsby presented with artistic plating. Tender meat with aromatic spices and fresh herbs.",
    image: "/images/products/IMG_4246.PNG",
    category: "Gatsby"
  },
  {
    id: 6,
    title: "Bean Curry Roti",
    description: "A vegetarian favorite. Hearty beans in a rich curry sauce, perfectly balanced with fresh cilantro.",
    image: "/images/products/IMG_4245.PNG",
    category: "Rotis"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-primary hover:text-primary/80 transition-colors">
            <img src="/images/logo/sunrise-logo.png" alt="Sunrise Chip 'n Ranch" className="h-10 w-auto" />
            <span className="hidden sm:inline">Sunrise</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
            <Link href="/story" className="text-sm font-medium hover:text-primary transition-colors">Our Story</Link>
            <Link href="/locations" className="text-sm font-medium hover:text-primary transition-colors">Locations</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-primary" />
              </button>
            </Link>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our signature dishes and culinary creations. Each image tells the story of authentic Durban cuisine crafted with passion and precision.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={encodeURI(item.image)}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full p-6 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
              <img
                src={encodeURI(selectedImage.image)}
                alt={selectedImage.title}
                className="w-full h-auto"
              />
              <div className="p-8 bg-white">
                <h2 className="text-3xl font-display font-bold text-primary mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-sm font-medium text-primary mb-4">
                  {selectedImage.category}
                </p>
                <p className="text-lg text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-display font-bold text-2xl mb-2">Sunrise</h3>
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
                <li><a href="https://www.ubereats.com/za/store/sunrise-chip-n-ranch-cape-town/HfCnhZQAR8mNK_jgrQHCYg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Uber Eats</a></li>
                <li><a href="https://www.mrd.com/delivery/restaurant/sunrise-chip-n-ranch-overport-overport/28602" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Mr D Food</a></li>
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
