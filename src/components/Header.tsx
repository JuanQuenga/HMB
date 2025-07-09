import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <section className="relative h-80 md:h-[500px] w-full bg-background flex flex-col items-center justify-center text-center shadow-sm rounded-b-3xl">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-dela-gothic-one font-extrabold text-brand drop-shadow-md mb-4">
        Saipan’s Family Bakery
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 font-poppins mb-8">
        Baked with love, served with a smile.
      </p>
      <form className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mx-auto">
        <Input
          type="text"
          className="rounded-full px-6 py-3 bg-white/90 border border-border shadow-sm focus:ring-2 focus:ring-primary/30 text-lg font-poppins"
          placeholder="Search our treats..."
        />
        <Button
          type="submit"
          className="rounded-full px-8 py-3 bg-brand hover:bg-primary text-white text-lg font-semibold shadow-md"
        >
          Search
        </Button>
      </form>
      {/* Optional: Add a subtle bakery illustration or pattern in the background */}
      <div className="absolute left-8 bottom-8 opacity-20 hidden md:block">
        <img
          src="/assets/plates/breakfast1.png"
          alt="Bakery Illustration"
          className="w-24 h-24 rounded-full"
        />
      </div>
      <div className="absolute right-8 top-8 opacity-20 hidden md:block">
        <img
          src="/assets/plates/dinner2.png"
          alt="Bakery Illustration"
          className="w-24 h-24 rounded-full"
        />
      </div>
    </section>
  );
}
