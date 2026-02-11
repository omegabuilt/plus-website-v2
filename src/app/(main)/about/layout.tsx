import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "10th Capital Investments Limited — the team behind Plus. SEC-regulated, based in Accra, Ghana. Making investing accessible to every Ghanaian.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
