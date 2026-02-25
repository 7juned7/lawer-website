import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      className="bg-[var(--bg-dark)] py-28"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
        
        {/* LEFT: TEXT */}
        <article>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-semibold leading-tight text-white"
          >
            About{" "}
            <span className="text-[var(--accent)]">
              ezeelegal
            </span>
          </h2>

          <p className="mt-8 text-base md:text-lg text-gray-300 leading-relaxed">
            <strong>ezeelegal</strong> is a forward-thinking law firm based in
            <strong> India</strong>, providing
            <strong> strategic and result-oriented legal solutions</strong> across
            <strong> arbitration</strong>, <strong>corporate</strong> and
            <strong> commercial advisory</strong>, as well as
            <strong> civil and commercial litigation</strong>.
          </p>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            We combine <strong>deep legal expertise</strong> with
            <strong> practical commercial insight</strong>, enabling us to deliver
            solutions that are not only <strong>legally sound</strong> but also
            aligned with our clients’ <strong>long-term objectives</strong>. Our
            team regularly represents clients before
            <span><strong> Supreme Court</strong>,  <strong> High Court</strong>,<strong> Tribunals</strong> and
            <strong> all other district courts of Delhi</strong>.
            </span>
          </p>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            Every matter entrusted to us is handled with
            <strong> meticulous preparation</strong>,
            <strong> strategic clarity</strong>, and
            <strong> absolute confidentiality</strong>, ensuring
            <strong> professional excellence</strong> at every stage.
          </p>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block px-7 py-3 border border-white text-white
                         hover:bg-white hover:text-[var(--bg-dark)]
                         transition text-sm tracking-wide"
            >
              Read More
            </Link>
          </div>
        </article>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[440px] rounded-lg overflow-hidden">
         <Image
  src="/team/supreme_court.jpeg"
  alt="ezeelegal law firm representing clients before Supreme Court and High Courts in India"
  fill
  priority
  className="object-cover"
/>
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

      </div>
    </section>
  );
}