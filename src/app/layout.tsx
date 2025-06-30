import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import AppGlobals from "@/components/AppGlobals";
import { UserProvider } from "@/context/UserContext";
import "@/styles/globals.css";

import AppLayout from "@/layout/AppLayout";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khaldon",
  description:
    "A real estate landing page with home listings, price prediction, and user authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body>
        <AppLayout>
          <UserProvider>
            <Header />
            <main>{children}</main>

            <AppGlobals />
            <Footer />
          </UserProvider>
        </AppLayout>
      </body>
    </html>
  );
}
