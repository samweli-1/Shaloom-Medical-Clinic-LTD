import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LangProvider } from "@/hooks/useLang";

export const metadata: Metadata = {
  title: "Shaloom Medical Clinic Ltd | Bigogwe, Nyabihu, Rwanda",
  description:
    "Compassionate, professional healthcare in Bigogwe Sector, Nyabihu District, Western Province, Rwanda. Consultations, Dentistry, Antenatal Care, Lab, Surgery and more.",
  keywords: "clinic Rwanda, Nyabihu hospital, Bigogwe health center, medical clinic Rwanda",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
