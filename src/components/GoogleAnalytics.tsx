"use client";

import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (!window.gtag) return;

    // Skip the very first render — the initial gtag config in layout.tsx handles that
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Build the page path and full URL from Next.js router state (not window.location which is stale)
    const pagePath = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;
    const fullUrl = `${window.location.origin}${pagePath}`;

    // Use gtag event (not config) to send a distinct page_view for each navigation
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: fullUrl,
      send_to: gaId,
    });
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
