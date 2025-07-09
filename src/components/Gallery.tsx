import Section from "./Section";

const galleryImages = [
  "/assets/plates/breakfast1.png",
  "/assets/plates/breakfast2.png",
  "/assets/plates/breakfast3.png",
  "/assets/plates/lunch1.png",
  "/assets/plates/lunch2.png",
  "/assets/plates/lunch3.png",
  "/assets/plates/dinner1.png",
  "/assets/plates/dinner2.png",
  "/assets/plates/dinner3.png",
];

export default function Gallery() {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-dela-gothic-one text-gray-700 mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-lg">
          Discover our delicious creations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Food Image {index + 1}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">Delicious Food</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
