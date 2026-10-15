import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RBLD//FRM0 — MOBILE SOFTWARE & ENGINEERING STUDIO",
  description: "High-end brutalist mobile software, low-level runtimes and uncompromising client artifacts.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,600;0,700;1,700&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;0,800;1,400&family=Space+Grotesk:wght@500;700;900&family=Syne:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#080808] text-[#EAEAEA] antialiased selection:bg-[#FF3B00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
