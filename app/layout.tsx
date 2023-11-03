import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M | An indepenpent music agency",
  description: "Welcome to M-Agency",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
