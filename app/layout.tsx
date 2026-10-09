import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import ThinkTypeTransition from "@/components/ThinkTypeTransition";
import ParticleBackground from "@/components/effects/ParticleBackground";
import { ThemeProvider } from "@/components/theme-provider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Hik Hik — Software Developer",
    template: "%s · Hik Hik",
  },
  description:
    "Portfolio of Hik Hik — software developer specialising in full-stack web applications, mobile apps and clean, human interfaces.",
  metadataBase: new URL("https://hik8hik.github.io"),
  openGraph: {
    title: "Hik Hik — Software Developer",
    description:
      "Full-stack developer building elegant, performant digital experiences.",
    url: "https://hik8hik.github.io",
    siteName: "Hik Hik",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c22" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased bg-white dark:bg-primary dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <ThinkTypeTransition />
          <PageTransition>
            <ParticleBackground>{children}</ParticleBackground>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
