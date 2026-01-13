import { Phone, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-6 py-24">
      <div className="text-center max-w-4xl">
        <h1 className="font-heading text-6xl md:text-8xl text-primary tracking-wider mb-4">
          KA-ZE
        </h1>
        <p className="text-xl md:text-2xl text-neutral-800 tracking-widest uppercase mb-2">
          Sushi and Beyond
        </p>
        <p className="text-base text-gray-500 mb-10">
          Traditional Japanese cuisine in the heart of Whistler, BC
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+16049384565"
            className="flex items-center gap-2 rounded bg-primary px-8 py-4 text-white transition hover:bg-primaryDark"
          >
            <Phone className="h-5 w-5" />
            Make a Reservation
          </a>
          <a
            href="/menu"
            className="flex items-center gap-2 rounded bg-white border border-neutral-300 px-8 py-4 text-neutral-700 transition hover:bg-gray-50"
          >
            View Our Menu
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="Hours"
            content="Daily 5:00 PM - 10:00 PM"
          />
          <InfoCard
            icon={<Phone className="h-6 w-6 text-primary" />}
            title="Reservations"
            content="(604) 938-4565"
          />
          <InfoCard
            icon={<MapPin className="h-6 w-6 text-primary" />}
            title="Location"
            content="Whistler, BC"
          />
        </div>
      </div>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const InfoCard = ({ icon, title, content }: InfoCardProps) => {
  return (
    <div className="bg-neutral-50 p-6 rounded text-center border border-neutral-200">
      <div className="flex justify-center mb-3">{icon}</div>
      <h3 className="text-sm uppercase tracking-widest text-neutral-800 mb-1">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl text-center text-neutral-800 mb-4">
          Authentic Japanese Cuisine
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Experience the art of traditional Japanese cooking
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Premium Ingredients"
            description="Japanese Tai, Blue Fin Tuna imported from Japan, and premium Matsusaka Beef"
          />
          <FeatureCard
            title="38 Years of Mastery"
            description="Chef Tokyo Tom brings decades of sushi-making expertise to every dish"
          />
          <FeatureCard
            title="Intimate Setting"
            description="Traditional Hori-Gotatsu style dining for an authentic experience"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white p-8 rounded border border-neutral-200 hover:border-primary transition-colors">
      <h3 className="text-lg font-medium text-neutral-800 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

const SpecialSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-4">Special Offer</p>
        <h2 className="font-heading text-3xl md:text-4xl text-neutral-800 mb-6">
          Tokyo Tom&apos;s Weekday Special
        </h2>
        <p className="text-gray-500 mb-8">Monday through Thursday</p>
        <div className="bg-neutral-50 p-10 rounded border border-neutral-200">
          <p className="text-4xl font-heading text-primary mb-4">
            $32
          </p>
          <p className="text-neutral-800 mb-2">Five Course Experience</p>
          <p className="text-sm text-gray-500">Per person, for groups of 2+</p>
          <div className="mt-6 pt-6 border-t border-neutral-200">
            <p className="text-gray-500 text-sm">
              Edamame · Gyoza · Sashimi · Rolls · Nabe
            </p>
          </div>
        </div>
        <p className="text-gray-500 mt-10">
          Call{" "}
          <a href="tel:+16049384565" className="text-primary hover:text-primaryDark">
            (604) 938-4565
          </a>{" "}
          to reserve
        </p>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <FeatureSection />
      <SpecialSection />
    </main>
  );
}
