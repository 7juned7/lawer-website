import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";

export const metadata = {
  title: "Apex Juris Chambers | Legal Excellence",
  description:
    "Apex Juris Chambers offers professional legal services with integrity, trust, and strategic expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}