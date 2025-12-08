import "../styles/globals.css";
import { ReactNode } from "react";
import { Footer } from "../components/footer";
import { ClientNavbarWrapper } from "../components/clientnavbarwrapper";
import { Rethink_Sans } from "next/font/google";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
});

export const metadata = {
  title: "Destiller One - Destilería artesanal de gin",
  description:
    "Destiller One: gin artesanal premium elaborado con botánicos seleccionados y procesos de destilación de excelencia.",
  icons: {
    icon: "/icons/Destileria.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" className={`${rethinkSans.variable}`}>
      <body
        className="
          bg-black text-white
          antialiased
          overflow-x-hidden
        "
      >
        <ClientNavbarWrapper>{children}</ClientNavbarWrapper>

        <Footer />
      </body>
    </html>
  );
}
