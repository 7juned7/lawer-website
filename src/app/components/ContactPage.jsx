export default function ContactPage() {
  return (
    <section className="bg-gray-100 py-28" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1
            id="contact-heading"
            className="text-3xl md:text-4xl font-semibold text-black"
          >
            Contact
            <span className="text-[var(--gold)]"> N3&amp;M Imperium Chambers</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-700 leading-relaxed">
            For professional inquiries, please use the details below.
            Submission of this form does not create a lawyer–client relationship.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-16 md:grid-cols-2 items-start">

          {/* LEFT: Contact Details */}
          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-semibold text-black">
                Office Address
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Chamber No. 225, Lawyer’s Block<br />
                Saket Court Complex<br />
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black">
                Contact Numbers
              </h3>
              <p className="mt-2 text-gray-700">
                +91 78277 95690<br />
                +91 96545 67373
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black">
                Email
              </h3>
              <p className="mt-2 text-gray-700">
                imperiumn3m@gmail.com
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black">
                Practice Location
              </h3>
              <p className="mt-2 text-gray-700 leading-relaxed">
                Office based in Delhi with representation before courts and
                tribunals across multiple jurisdictions in India.
              </p>
            </div>

          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white border border-black/10 rounded-xl p-8">
            <h3 className="text-lg font-semibold text-black mb-6">
              Send an Inquiry
            </h3>

            <form className="space-y-6">

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]"
                  placeholder="+91"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Brief Description of Matter
                </label>
                <textarea
                  rows="4"
                  className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]"
                  placeholder="Briefly describe the nature of your inquiry"
                />
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                By submitting this form, you acknowledge that no
                lawyer–client relationship is created and the information
                provided is for preliminary communication only.
              </p>

              <button
                type="submit"
                className="w-full border border-[var(--gold)] text-[var(--gold)]
                           py-3 text-sm hover:bg-[var(--gold)]
                           hover:text-black transition"
              >
                Submit Inquiry
              </button>

            </form>
          </div>

        </div>

      

      </div>
    </section>
  );
}