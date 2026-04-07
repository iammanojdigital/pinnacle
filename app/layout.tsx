import "./globals.css";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";
import GlobalTouchEffect from "@/components/GlobalTouchEffect";

export const metadata: Metadata = {
  title: "Pinnacle – Precision Manufacturing & Design Solutions",
  description: "One Partner. Every Process. Precision manufacturing from prototyping to scale production.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
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
