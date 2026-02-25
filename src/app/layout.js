import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: {
    default: "ezeelegal | Strategic Legal Solutions",
    template: "%s | ezeelegal",
  },
  description:
    "ezeelegal is an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  openGraph: {
    title: "ezeelegal | Strategic Legal Solutions",
    description:
      "ezeelegal offers professional legal representation across arbitration, corporate advisory, and litigation matters in India.",
    siteName: "ezeelegal",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}