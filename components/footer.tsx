import { Github, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com/waleed-agentic", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/waleed-ds/", icon: Linkedin }
];

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-black/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p className="text-sm text-muted">Waleed Ahmad — Designed and built by Waleed Ahmad</p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface/80 text-text hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}