"use client";

import { useEffect, useState } from "react";
import {
  captureUTMParams,
  appendUTMToUrl,
  trackDownloadClick,
} from "./utm";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=online.plusapp.android&pcampaignid=web_share";
const APP_STORE =
  "https://apps.apple.com/us/app/plus-invest/id6444616895";

/**
 * Hook that captures UTM params on mount and provides tracked store URLs.
 * Use this in any component with download links.
 */
export function useUTM() {
  const [playStoreUrl, setPlayStoreUrl] = useState(PLAY_STORE);
  const [appStoreUrl, setAppStoreUrl] = useState(APP_STORE);
  const [smartUrl, setSmartUrl] = useState(PLAY_STORE);

  useEffect(() => {
    // Capture UTMs from landing URL
    captureUTMParams();

    // Append UTMs to store URLs
    setPlayStoreUrl(appendUTMToUrl(PLAY_STORE));
    setAppStoreUrl(appendUTMToUrl(APP_STORE));

    // Smart URL based on device
    const ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod/i.test(ua)) {
      setSmartUrl(appendUTMToUrl(APP_STORE));
    } else {
      setSmartUrl(appendUTMToUrl(PLAY_STORE));
    }
  }, []);

  const onDownloadClick = (store: "google_play" | "app_store") => {
    trackDownloadClick(store);
  };

  return {
    playStoreUrl,
    appStoreUrl,
    smartUrl,
    onDownloadClick,
  };
}
