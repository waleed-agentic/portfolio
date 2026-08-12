import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Waleed Ahmad | AI/ML Engineer & Agentic AI Developer",
  description:
    "Waleed Ahmad's portfolio showcasing AI/ML engineering, agentic AI systems, LLM applications, and project work.",
  keywords: ["Waleed Ahmad", "AI/ML Engineer", "Agentic AI", "CrewAI", "LangGraph", "Portfolio"],
  authors: [{ name: "Waleed Ahmad" }],
  openGraph: {
    title: "Waleed Ahmad | AI/ML Engineer & Agentic AI Developer",
    description:
      "Modern portfolio featuring agentic AI systems, LLM projects, machine learning work, and contact details.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Ahmad | AI/ML Engineer & Agentic AI Developer",
    description:
      "Modern portfolio featuring agentic AI systems, LLM projects, machine learning work, and contact details."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${displayFont.variable} ${bodyFont.variable} bg-background text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}