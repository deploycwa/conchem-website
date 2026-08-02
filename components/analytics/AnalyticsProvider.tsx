"use client";

import Script from "next/script";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { analyticsConfig } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function AnalyticsProvider() {
  // Disabled in development or if not running in production
  if (!analyticsConfig.isProduction) {
    return null;
  }

  const { gaMeasurementId, gtmId, enableVercelAnalytics, enableSpeedInsights } = analyticsConfig;

  return (
    <>
      {/* Google Analytics (GA4) */}
      {gaMeasurementId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager (GTM) */}
      {gtmId && (
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
      )}

      {/* Vercel Web Analytics */}
      {enableVercelAnalytics && <VercelAnalytics />}

      {/* Vercel Speed Insights */}
      {enableSpeedInsights && <SpeedInsights />}
    </>
  );
}
