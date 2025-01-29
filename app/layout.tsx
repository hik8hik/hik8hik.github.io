import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import ThinkTypeTransition from "@/components/ThinkTypeTransition";
import ParticleBackground from "@/components/effects/ParticleBackground";
import { ThemeProvider } from "@/components/theme-provider";

const getbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "hik8hik",
  description: "hik8hik's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getbrainsMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ThinkTypeTransition />
          <PageTransition>
            <ParticleBackground>{children}</ParticleBackground>{" "}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
