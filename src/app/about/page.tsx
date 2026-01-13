import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | KA-ZE Sushi Whistler",
  description:
    "Learn about KA-ZE Sushi and Chef Tokyo Tom, bringing 38 years of sushi-making expertise to Whistler, BC since 2000.",
};

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white p-6 py-20 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl text-neutral-800 mb-6">
            Our Story
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A legacy of authentic Japanese cuisine in the heart of Whistler
          </p>
        </div>
      </div>

      {/* Tokyo Tom Section */}
      <section className="p-6 md:p-12 bg-neutral-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded p-8 md:p-12 border border-neutral-200">
            <h2 className="font-heading text-3xl text-neutral-800 mb-6">
              Meet &quot;Tokyo&quot; Tom
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                KA-ZE Sushi was founded in 2000 by &quot;Tokyo&quot; Tom, a
                master sushi chef with an impressive 38 years of sushi-making
                experience. His passion for authentic Japanese cuisine and
                dedication to quality has made KA-ZE a beloved destination for
                both locals and visitors to Whistler.
              </p>
              <p>
                With nearly four decades of expertise, Tokyo Tom brings the
                true essence of Japanese culinary tradition to every dish. His
                commitment to sourcing premium ingredients, including Japanese
                Tai, Blue Fin Tuna imported directly from Japan, and the
                finest Matsusaka Beef, ensures an authentic and unforgettable
                dining experience.
              </p>
              <p>
                Tokyo Tom&apos;s famous original creation, the Kamikaze Roll,
                has become a signature dish that keeps guests coming back for
                more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="p-6 md:p-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-3xl text-center text-neutral-800 mb-10">
            The Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded p-8 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Intimate Dining
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our restaurant accommodates 56 guests in an intimate,
                traditional Japanese atmosphere. We feature authentic
                Hori-Gotatsu style dining tables, perfect for small gatherings
                and special occasions.
              </p>
            </div>
            <div className="bg-neutral-50 rounded p-8 border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Group Dining
              </h3>
              <p className="text-gray-600 leading-relaxed">
                For parties of 7 or more guests, we kindly request
                pre-booking to ensure we can provide you with the best
                possible experience. Please call us at{" "}
                <a
                  href="tel:+16049384565"
                  className="text-primary hover:text-primaryDark"
                >
                  (604) 938-4565
                </a>{" "}
                to arrange your reservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Ingredients Section */}
      <section className="p-6 md:p-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Quality First</p>
          <h2 className="font-heading text-3xl text-neutral-800 mb-10">
            Premium Ingredients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded border border-neutral-200">
              <h3 className="font-medium text-neutral-800 mb-2">
                Japanese Tai
              </h3>
              <p className="text-gray-500 text-sm">Premium sea bream from Japan</p>
            </div>
            <div className="bg-white p-6 rounded border border-neutral-200">
              <h3 className="font-medium text-neutral-800 mb-2">
                Blue Fin Tuna
              </h3>
              <p className="text-gray-500 text-sm">Imported directly from Japan</p>
            </div>
            <div className="bg-white p-6 rounded border border-neutral-200">
              <h3 className="font-medium text-neutral-800 mb-2">
                Matsusaka Beef
              </h3>
              <p className="text-gray-500 text-sm">Legendary Japanese wagyu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sake Section */}
      <section className="p-6 md:p-12 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-neutral-800 mb-6">
            Premium Sake
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Complement your meal with our carefully curated selection of premium
            sake, imported directly from Japan. Our staff is happy to recommend
            the perfect pairing for your dishes.
          </p>
        </div>
      </section>
    </>
  );
};

export default function AboutPage() {
  return (
    <main className="flex-grow">
      <About />
    </main>
  );
}
