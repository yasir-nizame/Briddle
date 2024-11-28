// app/layout.tsx
import "./globals.css"; // Import Tailwind styles
import Sidebar from "../app/components/sidebar";

export const metadata = {
  title: "Bridle App",
  description: "Supercharge your equine business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-50">{children}</main>
      </body>
    </html>
  );
}
