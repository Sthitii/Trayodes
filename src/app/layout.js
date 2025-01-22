// src/app/layout.js
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FloatingQuickConsult from "@/components/FloatingQuickConsult";
import { QuickConsultProvider } from "@/context/QuickConsultContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <QuickConsultProvider>
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="pt-16">{children}</main>
          <FloatingQuickConsult />
          <Footer />
        </QuickConsultProvider>
      </body>
    </html>
  );
}
