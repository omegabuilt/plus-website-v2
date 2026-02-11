"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ExpressPayCallbackPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;

  useEffect(() => {
    if (id === "android") {
      const token = searchParams.get("token");
      const orderId = searchParams.get("order-id");

      const deepLink = `plus://expresspay-callback?token=${token}&order-id=${orderId}`;
      window.location.href = deepLink;
    } else if (id === "ios") {
      window.location.href =
        "https://apps.apple.com/gh/app/plus-invest/id6444616895";
    }
  }, [id, searchParams]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-burgundy-light">
      <div className="text-center px-4">
        <h1 className="text-2xl font-bold text-burgundy-dark mb-4">
          Redirecting...
        </h1>
        <p className="text-gray-600">
          You are being redirected to the Plus app.
        </p>
      </div>
    </section>
  );
}
