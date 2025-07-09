import Section from "./Section";

export default function Map() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-gray-700 mb-4">
          Visit Us
        </h2>
        <p className="text-gray-600 text-lg">
          Come and experience our delicious food
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Map placeholder */}
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">Interactive Map Placeholder</p>
        </div>

        {/* Contact information */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-dela-gothic-one text-gray-700 mb-4">
              Location
            </h3>
            <p className="text-gray-600">
              123 Main Street
              <br />
              Saipan, MP 96950
              <br />
              Northern Mariana Islands
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-dela-gothic-one text-gray-700 mb-4">
              Hours
            </h3>
            <p className="text-gray-600">
              Monday - Friday: 7:00 AM - 8:00 PM
              <br />
              Saturday: 8:00 AM - 6:00 PM
              <br />
              Sunday: 8:00 AM - 4:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-dela-gothic-one text-gray-700 mb-4">
              Contact
            </h3>
            <p className="text-gray-600">
              Phone: (670) 123-4567
              <br />
              Email: info@hermansbakery.com
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
