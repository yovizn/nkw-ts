import Header from "@components/Header/Header";
import Footer from "@components/footer";
import "@styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nakula Kresna",
  description: "Information, Creation and History by Nakula Kresna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
