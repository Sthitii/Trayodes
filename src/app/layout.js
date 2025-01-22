'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FloatingQuickConsult from "@/components/FloatingQuickConsult";
import { QuickConsultProvider } from "@/context/QuickConsultContext";
import { SessionProvider } from "next-auth/react";
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider>
          {isAdminRoute ? (
            // Admin Layout - Clean, only SessionProvider
            <>{children}</>
          ) : (
            // Public Layout - Full layout with all providers and components
            <QuickConsultProvider>
              <Navbar />
              <main className="pt-16">{children}</main>
              <FloatingQuickConsult />
              <Footer />
            </QuickConsultProvider>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}