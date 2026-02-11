import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Plus Investment App. Learn about mutual funds, treasury bills, US stocks, account setup, and fees.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
