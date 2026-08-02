/**
 * Centralized Analytics Abstraction
 * Supports Google Analytics 4 (GA4), Google Tag Manager (GTM),
 * Vercel Analytics, and Vercel Speed Insights.
 *
 * Requirements:
 * - Disabled by default.
 * - Reads IDs from environment variables:
 *     NEXT_PUBLIC_GA_MEASUREMENT_ID
 *     NEXT_PUBLIC_GTM_ID
 *     NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS ("true" | "false")
 *     NEXT_PUBLIC_ENABLE_VERCEL_SPEED_INSIGHTS ("true" | "false")
 * - Bypasses tracking in local development unless explicitly overridden.
 */

export const analyticsConfig = {
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
  enableVercelAnalytics: process.env.NEXT_PUBLIC_ENABLE_VERCEL_ANALYTICS === "true",
  enableSpeedInsights: process.env.NEXT_PUBLIC_ENABLE_VERCEL_SPEED_INSIGHTS === "true",
  isProduction: process.env.NODE_ENV === "production",
};

/**
 * Check if analytics should track in the current environment
 */
export function isAnalyticsEnabled(): boolean {
  return analyticsConfig.isProduction;
}

/**
 * Track custom event (GA4 / GTM window.gtag abstraction)
 */
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (!isAnalyticsEnabled()) return;

  if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

/**
 * Track page views
 */
export function trackPageView(url: string) {
  if (!isAnalyticsEnabled()) return;

  if (typeof window !== "undefined" && "gtag" in window && typeof window.gtag === "function") {
    window.gtag("config", analyticsConfig.gaMeasurementId, {
      page_path: url,
    });
  }
}
