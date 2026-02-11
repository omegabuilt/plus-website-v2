/**
 * UTM Parameter Capture & Passthrough
 *
 * Captures UTM params from the landing URL (from Google Ads, social, email, etc.)
 * and stores them in sessionStorage. When a user clicks a download link,
 * the UTMs are appended to the store URL so you can trace which campaign
 * drove the download.
 *
 * UTM params captured: utm_source, utm_medium, utm_campaign, utm_term, utm_content
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "plus_utm_params";

export type UTMParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/**
 * Capture UTM params from the current URL and store in sessionStorage.
 * Call this once on page load (e.g., in a layout or hook).
 */
export function captureUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  const url = new URL(window.location.href);
  const params: UTMParams = {};

  UTM_KEYS.forEach((key) => {
    const value = url.searchParams.get(key);
    if (value) {
      params[key] = value;
    }
  });

  // Only store if we found UTM params (don't overwrite with empty)
  if (Object.keys(params).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(params));
    } catch {
      // sessionStorage not available (private browsing, etc.)
    }
  }

  return params;
}

/**
 * Retrieve stored UTM params from sessionStorage.
 */
export function getStoredUTMParams(): UTMParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Append stored UTM params to a store URL.
 * Google Play and App Store both support URL query params for tracking.
 */
export function appendUTMToUrl(baseUrl: string): string {
  const params = getStoredUTMParams();
  if (Object.keys(params).length === 0) return baseUrl;

  const url = new URL(baseUrl);

  // For Google Play, use standard UTM params (they support them natively)
  // For App Store, append as custom params (Apple doesn't use UTMs but they pass through)
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

/**
 * Fire a GTM/dataLayer event for download clicks.
 * This lets you set up a Google Ads conversion based on the event.
 */
export function trackDownloadClick(store: "google_play" | "app_store") {
  if (typeof window === "undefined") return;

  const params = getStoredUTMParams();

  // Push to GTM dataLayer
  (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer =
    (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer || [];
  (window as unknown as { dataLayer: Record<string, unknown>[] }).dataLayer.push({
    event: "download_click",
    store: store,
    ...params,
  });
}
