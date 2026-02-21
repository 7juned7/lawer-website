export default function ServiceIntro() {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        
        <div className="bg-white/5 p-6 border border-white/10">
          <h3 className="text-lg font-medium text-white">
            Criminal Law & Bail Matters
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            Expert handling of criminal cases with strong courtroom advocacy.
          </p>
        </div>

        <div className="bg-white/5 p-6 border border-white/10">
          <h3 className="text-lg font-medium text-white">
            Corporate & IPR Law
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            Trusted legal advisory for corporate compliance and IPR matters.
          </p>
        </div>

        <div className="bg-white/5 p-6 border border-white/10">
          <h3 className="text-lg font-medium text-white">
            Service Matters
          </h3>
          <p className="mt-3 text-sm text-gray-400">
            Representation in service disputes involving defence and civil services.
          </p>
        </div>

      </div>
    </section>
  );
}