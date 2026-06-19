import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const FOUNDERS_IMG = "/images/founders/founders-baboo-lala.png";

export default function Story() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">Our Story</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A legacy of passion, tradition, and the boldest flavors in Durban since 1990.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex justify-center mb-16">
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={FOUNDERS_IMG}
                alt="Baboo and Lala — founders of Sunrise Chip 'n Ranch"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-12">
            {/* Founding */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Founded with a Dream</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sunrise Chip 'n Ranch was established 36 years ago, in 1990, by Baboo Birjanund and Premila Devi Manilal at its original location, 89 Sparks Road, Overport, Durban, South Africa. The business became widely known for its legendary-sized rotis, which quickly earned it a well-known reputation in the community.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                One of the most popular favourites was the bean and cheese roti, which later inspired the creation of a variety of fillings such as chips, kebab, chicken, and mutton. Cheese was also added to selected rotis to enhance their flavour and create a more satisfying meal experience.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                The restaurant became affectionately known as <span className="font-semibold text-primary">"Johnny's Rotis"</span> by locals and regulars who cherished the massive, perfectly crafted rotis and the warm hospitality that defined the brand.
              </p>
            </div>

            {/* Specialties & Recognition */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Authentic Durban Cuisine & Recognition</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sunrise Chip 'n Ranch specializes in authentic Durban Indian Curry and is known as the creators of the largest rotis in South Africa and authentic Durban Indian dishes. Our specialties include Roti's, Bunny Chows, Breyani, Burgers, and more, with a large variety of vegetarian foods we specialize in the Durban Way!
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                The business has received recognition through features in the in-flight magazines of Kulula and British Airways, as well as appearances on television food and travel programmes, including Food Network and e.tv. In addition, the brand has been featured on popular radio stations such as Good FM and East Coast Radio, along with coverage in newspapers including Rissum.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Another proud achievement was being featured in the film Attack of the Indian Werewolf. The tagline <span className="font-semibold text-primary">"The Biggest, The Best, The Boldest!"</span> perfectly encapsulates what we stand for.
              </p>
            </div>

            {/* Cape Town Expansion */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Expansion to Cape Town</h2>
              <p className="text-lg text-foreground leading-relaxed">
                One of the biggest milestones for Sunrise Chip 'n Ranch was expanding to Cape Town in 1999, establishing the business's second branch. Over the years, the brand has built a loyal customer base, with many customers continuing to support the business to this day. Even customers who have relocated outside of South Africa make it a priority to visit Sunrise Chip 'n Ranch as one of their first stops whenever they return.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Sunrise Chip 'n Ranch expanded to Cape Town in 1999 when the late Baboo Birjanund and Premila Devi Manilal visited the city on holiday and recognised a growing demand for authentic Durban curry and quality food offerings. Seeing the opportunity, they secured premises in Cape Town and later settled their son, Vikash Birjanund, there after his marriage to continue building the family business.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                A major innovation from the Cape Town branch was the creation of the famous Roti Gatsby by Vikash Birjanund, which has since become one of the most popular and best-selling rotis in Cape Town.
              </p>
            </div>

            {/* Current Leadership & Legacy */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Today & Beyond</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Today, the business continues to uphold its legendary reputation under the leadership of Vikash Birjanund, alongside his wife, Jenny Birjanund, and their three sons, Keval Birjanund, Kailash Birjanund, and Kayush Birjanund, who are actively involved in the day-to-day operations of the business.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Beyond business success, Sunrise Chip 'n Ranch is also recognised within the community for its commitment to giving back. The business runs a feeding scheme for underprivileged individuals at highly affordable prices, with no profit being made from these initiatives, as part of its ongoing effort to support and uplift the community.
              </p>
            </div>

            {/* The Biggest Roti Ever */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">The Biggest Roti Ever Created</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Sunrise Chip 'n Ranch proudly hosted a Roti Competition during the Sunrise 2010 World Cup, featuring the biggest roti ever created by the business. The roti measured an impressive 1.1 metres square with an 80 cm diameter and was generously filled with chips, chicken, and viennas, before being topped with a massive 110 slices of cheese. Altogether, the roti weighed an incredible 5.2 kg.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Mohammed Junaid Khan, also known as Mr MJ Khan, accepted the challenge and successfully completed the giant roti in nearly three hours, officially breaking the record and cementing Sunrise Chip 'n Ranch's place in culinary history.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-primary">Our Commitment</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Whether it's a 3 AM meal after a night out, a quick lunch break, or a celebration with loved ones, Sunrise Chip 'n Ranch has been there, serving generous portions of authentic Durban flavors that taste like high school nights, broken curfews, and unforgettable memories. For over three decades, we've been more than just a restaurant—we've been a pilgrimage site for food lovers, a gathering place for friends and families, and a symbol of Durban's vibrant street food culture.
              </p>
            </div>
          </div>
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
