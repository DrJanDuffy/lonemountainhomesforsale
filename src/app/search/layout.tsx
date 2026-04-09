import type { ReactNode } from "react";
import Script from "next/script";
import { realScoutDefaults } from "@/lib/site-contact";

export default function SearchLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script src={realScoutDefaults.scriptSrc} strategy="afterInteractive" type="module" />
      {children}
    </>
  );
}
