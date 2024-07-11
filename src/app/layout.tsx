import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SurveyLayout from "@/components/survey";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Survey App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SurveyLayout>
          {children}
        </SurveyLayout>
      </body>
    </html>
  );
}
