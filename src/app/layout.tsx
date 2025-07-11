import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: {
    default: "岡田大輝 - フルスタックエンジニア",
    template: "%s | 岡田大輝",
  },
  description: "現代のWebテクノロジーを駆使して、革新的なデジタルエクスペリエンスを創造するフルスタックエンジニア。React、Next.js、TypeScript、Node.jsを用いたWebアプリケーション開発のスペシャリスト。",
  keywords: ["フルスタックエンジニア", "React", "Next.js", "TypeScript", "Node.js", "Web開発", "岡田大輝"],
  authors: [{ name: "岡田大輝", url: "https://okaki-portfolio.vercel.app" }],
  creator: "岡田大輝",
  publisher: "岡田大輝",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  openGraph: {
    title: "岡田大輝 - フルスタックエンジニア",
    description: "現代のWebテクノロジーを駆使して、革新的なデジタルエクスペリエンスを創造するフルスタックエンジニア",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    url: "https://okaki-portfolio.vercel.app",
    siteName: "岡田大輝 ポートフォリオ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "岡田大輝 - フルスタックエンジニア",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "岡田大輝 - フルスタックエンジニア",
    description: "現代のWebテクノロジーを駆使して、革新的なデジタルエクスペリエンスを創造するフルスタックエンジニア",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://okaki-portfolio.vercel.app",
    languages: {
      "ja-JP": "https://okaki-portfolio.vercel.app",
      "en-US": "https://okaki-portfolio.vercel.app/en",
    },
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <TRPCReactProvider>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
