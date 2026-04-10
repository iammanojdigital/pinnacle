import "./globals.css";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";
import GlobalTouchEffect from "@/components/GlobalTouchEffect";

export const metadata: Metadata = {
  title: "Pinnacle Design Solutions & Manufacturing",
  description: "One Partner. Every Process. Precision manufacturing from prototyping to scale production.",
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
        <Chatbot />
        <GlobalTouchEffect />
      </body>
    </html>
  );
}
