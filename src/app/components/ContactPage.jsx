"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      alert("Please acknowledge the disclaimer before submitting.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "", consent: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[var(--bg-dark)] py-28 text-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 id="contact-heading" className="text-3xl md:text-4xl font-semibold">
            Contact <span className="text-[var(--accent)]">Ezeelegal</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed">
            For professional inquiries, please use the form below.
            Submission does not create a lawyer–client relationship.
          </p>
        </div>

        <div className="grid gap-16 md:grid-cols-2 items-start">

          {/* LEFT: Contact Details */}
          <div className="space-y-8 text-gray-300">
            <div>
              <h3 className="text-lg font-semibold text-white">Office Address</h3>
              <p className="mt-2 leading-relaxed">
                Chamber No. 225, Lawyer’s Block<br />
                Saket Court Complex<br />
                New Delhi, India
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Contact Numbers</h3>
              <p className="mt-2">
                +91 78277 95690<br />
                +91 96545 67373
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="mt-2">imperiumn3m@gmail.com</p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white border border-black/10 rounded-xl p-8 text-[var(--text-dark)]">
            <h3 className="text-lg font-semibold mb-6">Send an Inquiry</h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="w-full border border-gray-300 px-4 py-3 text-sm" />

              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email Address" className="w-full border border-gray-300 px-4 py-3 text-sm" />

              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Contact Number" className="w-full border border-gray-300 px-4 py-3 text-sm" />

              <textarea name="message" value={form.message} onChange={handleChange} required rows="4" placeholder="Brief description of the matter" className="w-full border border-gray-300 px-4 py-3 text-sm" />

              <label className="flex gap-2 text-xs text-gray-600">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required />
                I acknowledge that submitting this form does not create a lawyer–client relationship.
              </label>

              <button type="submit" disabled={status === "loading"} className="w-full border border-[var(--accent)] text-[var(--accent)] py-3 text-sm hover:bg-[var(--accent)] hover:text-white transition">
                {status === "loading" ? "Submitting..." : "Submit Inquiry"}
              </button>

              {status === "success" && <p className="text-sm text-green-600">Your inquiry has been submitted successfully.</p>}
              {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please try again later.</p>}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}