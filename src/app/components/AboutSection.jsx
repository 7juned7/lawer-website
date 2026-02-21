import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 md:grid-cols-2 items-center">
        
        {/* LEFT: TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
            About
            <span className="text-[var(--gold)]">
              {" "}N3&amp;M Imperium Chambers
            </span>
          </h2>

          <p className="mt-8 text-base md:text-lg text-white leading-relaxed">
            <strong>N3&amp;M Imperium Chambers</strong> is a forward-thinking law firm
            based in <strong>Delhi</strong>, providing
            <strong> strategic and result-oriented legal solutions</strong> across
            <strong> India</strong>. Our practice encompasses
            <strong> arbitration</strong>, <strong>commercial</strong> and
            <strong> corporate advisory</strong>, as well as
            <strong> criminal and civil litigation</strong>.
          </p>

          <p className="mt-6 text-base md:text-lg text-white leading-relaxed">
            We combine <strong>deep legal expertise</strong> with
            <strong> practical commercial insight</strong>, enabling us to deliver
            solutions that are not only <strong>legally sound</strong> but also
            aligned with our clients’ <strong>long-term objectives</strong>. Our
            team regularly represents clients before the
            <strong> Supreme Court of India</strong>,
            <strong> High Courts</strong>, and
            <strong> subordinate courts</strong>.
          </p>

          <p className="mt-6 text-base md:text-lg text-white leading-relaxed">
            Every matter entrusted to us is handled with
            <strong> meticulous preparation</strong>,
            <strong> strategic clarity</strong>, and
            <strong> absolute confidentiality</strong>, ensuring
            <strong> professional excellence</strong> at every stage.
          </p>

          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block px-7 py-3 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition text-sm tracking-wide"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-[440px]">
          <Image
            src="/images/about.jpg"
            alt="N3&M Imperium Chambers legal practice"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}