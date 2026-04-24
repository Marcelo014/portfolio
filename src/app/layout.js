import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";
import ButtonGlow from "./components/ButtonGlow";
import TriforceTrail from "./components/TriforceTrail";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Marcelo | Portfolio",
  description: "Computer Science student building cool things on the web.",
};

export const viewport = {
  themeColor: "#141414",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${bebasNeue.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ButtonGlow />
        <TriforceTrail />
        {children}
      </body>
    </html>
  );
}