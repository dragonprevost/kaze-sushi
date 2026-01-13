import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | KA-ZE Sushi Whistler",
  description:
    "Explore our menu of traditional Japanese cuisine including sushi, sashimi, the famous Kamikaze Roll, Chirashi Sushi, and The Whistler Nabe hot pot.",
};

interface MenuItemProps {
  title: string;
  description: string;
  highlight?: boolean;
}

const MenuItem = ({ title, description, highlight = false }: MenuItemProps) => {
  return (
    <div
      className={`p-6 rounded border ${highlight ? "bg-red-50 border-primary/30" : "bg-white border-neutral-200"}`}
    >
      <h3 className={`font-medium mb-2 ${highlight ? "text-primary" : "text-neutral-800"}`}>{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const MenuSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-lg uppercase tracking-widest text-neutral-800 mb-6 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default function MenuPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-white p-6 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-4">Our Offerings</p>
        <h1 className="font-heading text-4xl md:text-5xl text-neutral-800 mb-6">
          The Menu
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Traditional Japanese cuisine crafted with premium ingredients and 38
          years of expertise
        </p>
      </div>

      {/* Weekday Special Banner */}
      <section className="bg-primary py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/80 text-sm uppercase tracking-widest mb-2">
            Monday – Thursday
          </p>
          <h2 className="font-heading text-2xl text-white mb-1">
            Tokyo Tom&apos;s Weekday Special
          </h2>
          <p className="text-white text-2xl font-heading">
            5 Courses · $32 per person
          </p>
          <p className="text-white/70 text-sm mt-2">
            Groups of 2+ | Edamame · Gyoza · Sashimi · Rolls · Nabe
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="p-6 md:p-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <MenuSection title="Signature Dishes">
            <MenuItem
              title="Kamikaze Roll"
              description="Tokyo Tom's famous original creation - a signature roll that has become legendary in Whistler"
              highlight={true}
            />
            <MenuItem
              title="Chirashi Sushi"
              description="A beautiful assortment of fresh sashimi artfully arranged over seasoned sushi rice"
              highlight={true}
            />
            <MenuItem
              title="The Whistler Nabe"
              description="Traditional Japanese hot pot featuring premium ingredients in a rich, flavorful broth"
              highlight={true}
            />
          </MenuSection>

          <MenuSection title="Sushi & Sashimi">
            <MenuItem
              title="Premium Sashimi Selection"
              description="Featuring Japanese Tai (sea bream), Blue Fin Tuna imported from Japan, and seasonal selections"
            />
            <MenuItem
              title="Nigiri Sushi"
              description="Hand-pressed sushi rice topped with the freshest fish, prepared with traditional technique"
            />
            <MenuItem
              title="Sushi Rolls"
              description="A variety of maki rolls featuring both traditional and creative combinations"
            />
            <MenuItem
              title="Omakase"
              description="Chef's selection - let Tokyo Tom guide you through the best of what's fresh today"
            />
          </MenuSection>

          <MenuSection title="Appetizers">
            <MenuItem
              title="Edamame"
              description="Steamed young soybeans lightly salted - a perfect start to your meal"
            />
            <MenuItem
              title="Gyoza"
              description="Pan-fried Japanese dumplings with savory filling"
            />
          </MenuSection>

          <MenuSection title="Premium Selections">
            <MenuItem
              title="Japanese Tai"
              description="Premium sea bream sourced directly from Japan"
            />
            <MenuItem
              title="Blue Fin Tuna"
              description="The finest blue fin tuna imported from Japan"
            />
            <MenuItem
              title="Matsusaka Beef"
              description="Legendary Japanese wagyu, known for its exceptional marbling and flavor"
            />
          </MenuSection>

          <MenuSection title="Beverages">
            <MenuItem
              title="Premium Sake Selection"
              description="Carefully curated sake imported from Japan - ask our staff for pairing recommendations"
            />
            <MenuItem
              title="Japanese Beer & Beverages"
              description="Selection of Japanese beers and traditional beverages"
            />
          </MenuSection>
        </div>
      </section>

      {/* Note Section */}
      <section className="bg-white py-12 px-6 border-t border-neutral-200">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">
            Menu items and availability may vary. Please contact us for current
            offerings and pricing.
          </p>
          <p className="text-neutral-800">
            For reservations, call{" "}
            <a
              href="tel:+16049384565"
              className="text-primary hover:text-primaryDark"
            >
              (604) 938-4565
            </a>
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Groups of 7+ please pre-book your reservation
          </p>
        </div>
      </section>
    </main>
  );
}
