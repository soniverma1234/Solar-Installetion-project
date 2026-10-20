import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

function ContactForm() {
  const [message, setMessage] = useState("");
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;

  function handleSubmit(event) {
    event.preventDefault();

    if (!contactEmail) {
      setMessage(
        "The inquiry form is not configured yet. Add VITE_CONTACT_EMAIL to the project environment to enable it.",
      );
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Sunora inquiry: ${formData.get("topic")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.get("name")}`,
        `Email: ${formData.get("email")}`,
        `Topic: ${formData.get("topic")}`,
        "",
        formData.get("details"),
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setMessage("Your email app should open with the inquiry ready to send.");
  }

  return (
    <section className="bg-[#F7F9F5] py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#5E7848]">
            Get in touch
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#173B35] md:text-5xl">
            Let&apos;s talk about your energy goals.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">
            Share a little about your project and our team can help you explore
            a practical next step.
          </p>
          <div className="mt-9 space-y-5 text-slate-700">
            <p className="flex items-center gap-3">
              <Mail size={19} className="text-[#5E7848]" aria-hidden="true" />
              Use the inquiry form to start a conversation.
            </p>
            <p className="flex items-center gap-3">
              <Phone size={19} className="text-[#5E7848]" aria-hidden="true" />
              We&apos;ll follow up using the contact details you provide.
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={19} className="text-[#5E7848]" aria-hidden="true" />
              Serving homeowners and businesses exploring clean energy.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-[#173B35]">
              Your name
              <input
                name="name"
                autoComplete="name"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#5E7848] focus:ring-2 focus:ring-[#5E7848]/25"
              />
            </label>
            <label className="text-sm font-semibold text-[#173B35]">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#5E7848] focus:ring-2 focus:ring-[#5E7848]/25"
              />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-[#173B35]">
            What can we help with?
            <select
              name="topic"
              required
              defaultValue=""
              className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-[#5E7848] focus:ring-2 focus:ring-[#5E7848]/25"
            >
              <option value="" disabled>
                Select a topic
              </option>
              <option>Residential solar</option>
              <option>Commercial solar</option>
              <option>Energy storage</option>
              <option>Other project</option>
            </select>
          </label>
          <label className="mt-5 block text-sm font-semibold text-[#173B35]">
            Tell us about your project
            <textarea
              name="details"
              rows="5"
              required
              className="mt-2 w-full resize-y rounded-lg border border-slate-300 px-4 py-3 font-normal outline-none transition focus:border-[#5E7848] focus:ring-2 focus:ring-[#5E7848]/25"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-[#173B35] px-6 py-4 font-semibold text-white transition hover:bg-[#24564B]"
          >
            Prepare inquiry
          </button>
          <p className="mt-4 text-sm text-slate-500" aria-live="polite">
            {message ||
              "Submitting opens a pre-filled email in your email application."}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
