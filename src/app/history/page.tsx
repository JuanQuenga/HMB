import Image from "next/image";

export default function HistoryPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#F11A23] mb-4 text-center font-dela-gothic-one">
        Our History
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        The story of Herman’s Modern Bakery is one of resilience, family, and
        community. Discover how a small bake shop in post-war Saipan grew into a
        beloved island institution.
      </p>

      {/* Section 1 */}
      <section className="space-y-4">
        <Image
          src="/assets/photos/history-1.jpg"
          alt="Herman Delos Reyes Deleon Guerrero as a young baker"
          width={900}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#F11A23]">
          1944: Humble Beginnings
        </h2>
        <p>
          The ending of the Battle of Saipan in 1944 saw the beginning of
          Herman’s Bakery when its founder, Herman Delos Reyes Deleon Guerrero,
          who, as a teenager, apprenticed at Shimada’s Bakery in Garapan, raised
          his hand when the U.S. military administrators at the civilian
          encampment known as Camp Susupe called for volunteers who knew how to
          bake bread. Herman had the skills and stepped up. That’s where it all
          started.
        </p>
        <p>
          After the Chamorro and Carolinian residents were relocated to Chalan
          Kanoa from Camp Susupe in November of 1944, Herman continued to
          provide bread for the residents. The US Military gave him the
          equipment and surplus military materials and supplies needed to
          continue on the baking path to success. Herman established the first
          business on Saipan and created a bakery facility in an existing
          military Quonset hut where the U.S. Post Office is now located and
          where Herman’s remained in operation until 1979 when the move was made
          to its current location on what was formerly known as Airport Road
          (now Chalan Tun Herman Pan).
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <Image
          src="/assets/photos/history-2.jpg"
          alt="Herman and Maria Guerrero with family and staff"
          width={900}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#F11A23]">
          A Family and Community Legacy
        </h2>
        <p>
          Known in the community as “Tun Herman Pan” (bread), he and his wife,
          Maria Tenorio Guerrero (better known as Tan Marikita), spent the next
          twenty-eight years dedicated to raising their family of eleven
          children and providing bakery products to the people of Saipan. Herman
          and Maria were known for their generosity and frequently gave away
          their bread to those in need, and were particularly close to the
          Mercedarian Sisters. The Guerrero’s were instrumental in the building
          of Mount Carmel Cathedral in Chalan Kanoa, and upon completion, their
          son, Juan, was the first to be baptized after the church’s opening on
          December 14, 1949.
        </p>
        <p>
          As the years went by, Herman’s Bakery continued to be a staple in
          providing bread to the local community, overcoming challenges such as
          power shortages, supply delays, and the need for new equipment. The
          bakery’s growth was supported by dedicated staff, family, and friends,
          all working together to ensure fresh bread was available daily.
        </p>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <Image
          src="/assets/photos/history-3.jpg"
          alt="Bakery staff and delivery team in the early years"
          width={900}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#F11A23]">
          Growth, Innovation, and Tradition
        </h2>
        <p>
          Over the decades, Herman’s Modern Bakery introduced new products,
          expanded its facilities, and embraced innovation while honoring
          tradition. From the first “traditional” turkey meals for Thanksgiving
          to the introduction of sweet bread and pan toasta, the bakery adapted
          to the needs of the community and the growing tourism industry.
        </p>
        <p>
          The bakery’s success was built on hard work, family support, and a
          commitment to quality. New equipment, dedicated bakers, and strong
          partnerships helped Herman’s thrive, even through challenges like
          flooding and power outages.
        </p>
      </section>

      {/* Section 4 */}
      <section className="space-y-4">
        <Image
          src="/assets/photos/history-4.jpg"
          alt="Modern day Herman’s Bakery and café"
          width={900}
          height={500}
          className="rounded-xl shadow-lg mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-[#F11A23]">A Lasting Legacy</h2>
        <p>
          Today, Herman’s Modern Bakery is a thriving bakery, café, and catering
          service with 140 employees. Now in its third and fourth generations,
          the Guerrero family continues the legacy of Tun Herman and Tan Maria,
          serving the people of Saipan and beyond with the same dedication,
          generosity, and love that started it all in 1944.
        </p>
        <p>
          The Guerrero family extends its Un Dangkulu na Si Yu’us Ma’ase to the
          community, business partners, loyal patrons, and all who have
          supported Herman’s through the years. Thank you for being part of our
          story!
        </p>
      </section>
    </main>
  );
}
