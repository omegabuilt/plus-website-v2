"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    // Small delay to ensure document.title has updated after route change
    const timeout = setTimeout(() => {
      const url = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      window.gtag("config", gaId, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams, gaId]);

  return null;
}

export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsTracker gaId={gaId} />
    </Suspense>
  );
}
