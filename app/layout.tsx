import "./globals.css";
import { Metadata } from "next";
import GlobalTouchEffect from "@/components/GlobalTouchEffect";

export const metadata: Metadata = {
  title: "Pinnacle Design Solutions & Manufacturing",
  description: "One Partner. Integrated Processes. Accelerated Growth. Radical Transparency. Complete Ownership. Redefining manufacturing through speed, precision, and intelligent execution at every stage.",
  icons: {
    icon: "/favicon-pinnacle.png",
    shortcut: "/favicon-pinnacle.png",
    apple: "/favicon-pinnacle.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <GlobalTouchEffect />
      </body>
    </html>
  );
}
