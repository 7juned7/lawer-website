import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsappButton";
import Script from "next/script";


export const metadata = {
  title: {
    default: "Ezee Legal | Strategic Legal Solutions",
    template: "%s | Ezee Legal",
  },
  description:
    "Ezee Legal is an India-based law firm providing strategic legal representation across arbitration, corporate and commercial advisory, and civil and criminal litigation with a pan-India practice.",
  openGraph: {
    title: "Ezee Legal | Strategic Legal Solutions",
    description:
      "Ezee Legal offers professional legal representation across arbitration, corporate advisory, and litigation matters in India.",
    siteName: "Ezee Legal",
    url: "https://www.ezeelegal.in",
    images: [
      {
        url: "https://www.ezeelegal.in/og.jpeg",
        width: 1200,
        height: 630,
        alt: "Ezee Legal – Strategic Legal Solutions in India",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.ezeelegal.in",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
<meta name="google-site-verification" content="tPjmzhxNN1SgySjz0rgBt9pzLOUKx2LB6wysSH0_y20" />
      <body>
        <Navbar />
  
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}