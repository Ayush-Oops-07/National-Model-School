import Script from "next/script";

/**
 * Google Analytics (GA4).
 *
 * To enable: set NEXT_PUBLIC_GA_MEASUREMENT_ID in your environment
 * (e.g. .env.local or your hosting provider's env settings) to your
 * Measurement ID, which looks like "G-XXXXXXXXXX".
 *
 * If the env var isn't set, this component renders nothing — safe to
 * leave in place at all times.
 */
export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
