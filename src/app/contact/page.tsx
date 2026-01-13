import type { Metadata } from "next";
import { Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | KA-ZE Sushi Whistler",
  description:
    "Contact KA-ZE Sushi in Whistler, BC. Make reservations at (604) 938-4565. Open daily 5:00 PM - 10:00 PM.",
};

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-white p-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Get in Touch</p>
          <h1 className="font-heading text-4xl md:text-5xl text-neutral-800 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-500">
            We look forward to welcoming you
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="bg-neutral-50 p-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded p-8 border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-medium text-neutral-800">
                  Reservations
                </h2>
              </div>
              <a
                href="tel:+16049384565"
                className="text-2xl text-primary hover:text-primaryDark block mb-3"
              >
                (604) 938-4565
              </a>
              <p className="text-gray-500 text-sm">
                For groups of 7 or more, please call ahead to reserve your
                table.
              </p>
            </div>

            <div className="bg-white rounded p-8 border border-neutral-200">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h2 className="text-lg font-medium text-neutral-800">Hours</h2>
              </div>
              <p className="text-gray-600 mb-1">Open Daily</p>
              <p className="text-2xl text-neutral-800">
                5:00 PM – 10:00 PM
              </p>
              <p className="text-gray-500 text-sm mt-3">Monday through Sunday</p>
            </div>
          </div>

          <div className="bg-white rounded p-8 border border-neutral-200">
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-medium text-neutral-800">Location</h2>
            </div>
            <p className="text-gray-600 mb-3">
              Located in the heart of Whistler, British Columbia
            </p>
            <p className="text-gray-500 text-sm">
              Traditional Japanese dining in a warm, intimate atmosphere.
              Our restaurant accommodates 56 guests with authentic Hori-Gotatsu
              style seating.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl text-neutral-800 mb-4">
            Visit Us Today
          </h2>
          <p className="text-gray-500 mb-8">
            Experience authentic Japanese cuisine crafted by Tokyo Tom
          </p>
          <a
            href="tel:+16049384565"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded transition hover:bg-primaryDark"
          >
            <Phone className="h-5 w-5" />
            Call for Reservations
          </a>
        </div>
      </div>
    </>
  );
};

export default function ContactPage() {
  return (
    <main className="flex-grow">
      <Contact />
    </main>
  );
}
