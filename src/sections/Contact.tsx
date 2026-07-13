"use client";
import { useState, useEffect } from "react";
import { en } from "@/dictionaries/en";

const Contact = ({ dictionary }: { dictionary: typeof en }) => {
  const [mounted, setMounted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/xanywnqd", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSending(false);
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const { contact } = dictionary;

  return (
    <section id="contact" className="py-20 bg-light-secondary dark:bg-dark-secondary transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-light-text dark:text-dark-text section-title-underline">
            {dictionary.sectionTitles.contact}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div>
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4">Parlons de votre projet !</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{contact.invitation}</p>
            {[
              { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: contact.email, href: `mailto:${contact.email}` },
              { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Téléphone", value: contact.phone, href: `tel:${contact.phone}` },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Localisation", value: contact.location, href: undefined },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 mb-4 p-4 bg-white dark:bg-dark-background rounded-xl border border-light-border dark:border-dark-border">
                <div className="w-10 h-10 hero-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  {href
                    ? <a href={href} className="text-light-text dark:text-dark-text font-semibold hover:text-accent transition-colors">{value}</a>
                    : <p className="text-light-text dark:text-dark-text font-semibold">{value}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <div className="bg-white dark:bg-dark-background rounded-2xl p-8 shadow-md border border-light-border dark:border-dark-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: "name",    label: contact.form.name,    type: "text" },
                { id: "email",   label: contact.form.email,   type: "email" },
                { id: "subject", label: contact.form.subject, type: "text" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
                  <input
                    type={type} id={id} name={id} required
                    className="w-full px-4 py-2.5 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-secondary text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{contact.form.message}</label>
                <textarea
                  id="message" name="message" rows={4} required
                  className="w-full px-4 py-2.5 border border-light-border dark:border-dark-border rounded-lg bg-light-background dark:bg-dark-secondary text-light-text dark:text-dark-text focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit" disabled={sending}
                className="w-full py-3 hero-gradient text-white font-bold rounded-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {sending ? contact.form.sending : sent ? contact.form.success : contact.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
