import "./globals.css";
import Navbar from "@/components/Navbar";
import Foooter from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        {/* <link href="https://fonts.cdnfonts.com/css/iranyekan" rel="stylesheet" /> */}
        <link rel="preconnect" href="//fdn.fontcdn.ir" />
        <link rel="preconnect" href="//v1.fontapi.ir" />
        <link href="https://v1.fontapi.ir/css/VazirFD" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Foooter />
      </body>
    </html>
  );
}
