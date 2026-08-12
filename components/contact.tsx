import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { ContactForm } from "./contact-form";

const contactItems = [
  { label: "Email", value: "waleed.ml.ds@gmail.com", href: "mailto:waleed.ml.ds@gmail.com", icon: Mail },
  { label: "Phone", value: "0321-6635287", href: "tel:+923216635287", icon: Phone },
  { label: "Location", value: "Faisalabad, Pakistan", href: "#contact", icon: MapPin }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Have a project? Let's talk!" />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
          <Reveal>
            <div className="space-y-4 rounded-[2rem] border border-border bg-surface/70 p-6 shadow-2xl shadow-black/20 md:p-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-5 py-4 hover:border-accent/30 hover:bg-accent/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-muted">{item.label}</p>
                      <p className="mt-1 text-sm font-semibold text-text">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}